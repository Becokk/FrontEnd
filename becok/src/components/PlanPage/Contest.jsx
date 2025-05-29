import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContestItem from "./ContestItem";
import ContestsModal from "../CardModal/ContestModal";
import { createPortal } from "react-dom";
import { getRecommendedContests } from "../../apis/contestlist";

const Contest = () => {
  const [contests, setContests] = useState([]);
  const [selectedContestId, setSelectedContestId] = useState(null);
  const memberId = localStorage.getItem("memberId") || 7;

  useEffect(() => {
    const fetchContests = async () => {
      try {
        console.log("memberId from localStorage:", memberId);
        const response = await getRecommendedContests(memberId);
        const uniqueContests = [];
        const seenIds = new Set();

        for (const contest of response.data) {
          if (!seenIds.has(contest.id)) {
            seenIds.add(contest.id);
            uniqueContests.push(contest);
          }
        }

        const shuffled = [...uniqueContests].sort(() => 0.5 - Math.random());
        setContests(shuffled.slice(0, 9));
        console.log("API Response:", response.data);
      } catch (error) {
        console.error("공모전 불러오기 실패:", error);
        console.error("API Error:", error);
      }
    };

    fetchContests();
  }, [memberId]);

  return (
    // <ContentWrapper>
    //     {Array.from({ length: 9 }).map((_, index) => (
    //         <ContestItem key={index} />
    //     ))}
    // </ContentWrapper>
    <>
      <ContentWrapper>
        {contests.map((contest) => (
          <ContestItem
            key={`${contest.id}-${contest.title}-${contest.endDate || Math.random()}`}
            contest={{ ...contest, dday: contest.endDate }}
            onClick={() => setSelectedContestId(contest.id)}
          />
        ))}
      </ContentWrapper>
      {selectedContestId &&
        createPortal(
          <ContestsModal
            contestId={selectedContestId}
            onClose={() => setSelectedContestId(null)}
          />,
          document.body
        )}
    </>
  );
};

export default Contest;

const ContentWrapper = styled.div`
  width: 100%;
  background: #f8f9fe;
  border-radius: 12px;
  padding: 30px;
  box-sizing: border-box;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 44px;
  height: calc(100vh - 300px); // 상단 여백과 패딩을 고려한 높이

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    padding: 24px;
  }

  @media (max-width: 1024px) {
    padding: 20px;
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 20px;
  }
`;
