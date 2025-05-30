import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import StatusImg from "../../assets/status.png";
import HandImg from "../../assets/hand.png";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://3.36.162.164:8080";

const mapProgramToContest = (program) => ({
  id: program.id || program.program_id,
  name: program.name || program.title,
  status: program.status,
  category: program.category,
  dday: calculateDday(program.endDate),
  // Explicitly map thumbnailUrl for use in ContestItem
  thumbnailUrl: program.thumbnailUrl || program.imgUrl || "/default-image.jpg",
  bookmarked: program.bookmarked ?? false,
  notification: program.notification ?? false,
  linkUrl: program.linkUrl || "#",
  organizer: program.organizer || "",
  endDate: program.endDate || "",
});

const calculateDday = (endDate) => {
  if (!endDate || typeof endDate !== "string")
    return { text: "종료", bgColor: "#d52525" };

  const [year, month, day] = endDate.split("-").map(Number);
  const targetDate = new Date(Date.UTC(year, month - 1, day));

  const koreaNow = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );
  const todayKST = new Date(
    koreaNow.getFullYear(),
    koreaNow.getMonth(),
    koreaNow.getDate()
  );

  const diff = Math.ceil((targetDate - todayKST) / (1000 * 60 * 60 * 24));

  if (diff > 0) {
    return {
      text: `D-${diff}`,
      bgColor: diff >= 7 ? "#2e65f3" : "#d52525", // blue if 7 days or more, red otherwise
    };
  }
  if (diff === 0) return { text: "D-DAY", bgColor: "#d52525" };
  return { text: "종료", bgColor: "#d52525" };
};

const useRecommendedPrograms = () => {
  const [recommendedPrograms, setRecommendedPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const memberId = localStorage.getItem("memberId");
    console.log("현재 memberId:", memberId);

    if (!memberId) {
      setError(new Error("회원 정보를 찾을 수 없습니다."));
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/api/recommend/list/${memberId}`
        );
        console.log("API 응답 전체 데이터:", response.data);

        // 응답이 배열인지 확인
        if (!Array.isArray(response.data)) {
          throw new Error("데이터 형식이 올바르지 않습니다.");
        }

        const mapped = response.data.map(mapProgramToContest);
        console.log("매핑 후 데이터:", mapped);

        setRecommendedPrograms(mapped.slice(0, 10));
        setError(null);
      } catch (err) {
        console.error("API Error:", err);
        console.error("에러 상세:", err.response?.data);
        setError(
          err.response?.data?.message ||
            err.message ||
            "데이터를 불러오는데 실패했습니다."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { recommendedPrograms, loading, error };
};

const ContestItem = ({ contest, onClick }) => {
  return (
    <Card key={contest.id} onClick={onClick}>
      <ImageWrapper>
        <Image bg={contest.thumbnailUrl} />
        {(() => {
          const { text, bgColor } = calculateDday(contest.endDate);
          return (
            <Dday style={{ backgroundColor: bgColor }}>
              <DdayGroup>
                <DdayNum>{text}</DdayNum>
              </DdayGroup>
            </Dday>
          );
        })()}
      </ImageWrapper>
      <Content>
        <TitleRow>
          <Title>{contest.title}</Title>
          <Status status={contest.status}>
            <img
              src={contest.status === "UPCOMING" ? HandImg : StatusImg}
              alt="status"
            />{" "}
            {contest.status === "UPCOMING"
              ? "모집대기"
              : contest.status === "ONGOING"
                ? "모집 중"
                : contest.status}
          </Status>
        </TitleRow>
        <Tags>
          {Array.isArray(contest.category)
            ? contest.category.map((tag, i) => <Tag key={i}>#{tag.trim()}</Tag>)
            : typeof contest.category === "string"
              ? contest.category
                  .split("/")
                  .map((tag, i) => <Tag key={i}>#{tag.trim()}</Tag>)
              : null}
        </Tags>
      </Content>
    </Card>
  );
};

export default ContestItem;

export { useRecommendedPrograms };

const Card = styled.div`
  background-color: #f7f9ff;
  width: 100%;
  height: auto;
  min-height: 260px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  padding-bottom: 2px;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 130px;

  @media (max-width: 768px) {
    height: 120px;
  }
`;

const Image = styled.div`
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: top left;
  object-fit: cover;
  object-position: top left;
`;

const Dday = styled.div`
  position: absolute;
  top: 22px;
  right: 0px;
  border-radius: 15px 0px 0px 15px;
  padding: 7px 24px;
  color: white;
  width: auto;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 4px 14px;
  }
`;

const DdayGroup = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

const DdayDash = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DdayNum = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 16px 28px 0 28px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #363636;
  line-height: 33.6px;
  letter-spacing: -0.6px;
  white-space: nowrap;
  margin-top: 12px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1024px) {
    font-size: 22px;
    line-height: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Status = styled.div`
  font-size: 1.1rem;
  color: ${(props) => (props.status === "UPCOMING" ? "#626474" : "#FFFFFF")};
  background: ${(props) =>
    props.status === "UPCOMING" ? "#E5E8EF" : "#2e65f3"};
  padding: 0.25rem 0.625rem;
  border-radius: 0.75rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.5rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.1875rem 0.5rem;
  }

  img {
    width: 0.9rem;
    height: 0.9rem;

    @media (max-width: 768px) {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #747e96;
  letter-spacing: -0.42px;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Actions = styled.div`
  position: absolute;
  top: calc(12px + 33.6px + 8px + 24px + 40px);
  right: 28px;
  display: flex;
  gap: 12px;

  img {
    width: 32px;
    height: 32px;

    @media (max-width: 768px) {
      width: 28px;
      height: 28px;
    }
  }

  @media (max-width: 768px) {
    right: 20px;
    gap: 8px;
  }
`;
const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;
