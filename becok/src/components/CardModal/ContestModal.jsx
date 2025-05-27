import React, { useState, useRef, useEffect } from "react";
import { usePostUserBookMark } from "../../hooks/mutation/BookMarkMutation";
import { useGetNotificationSettings } from "../../hooks/mutation/NotificationMutation";
import axios from "axios";
import shipIcon from "../../assets/ship.png";
import handIcon from "../../assets/hand.png";
import {
  ModalWrapper,
  ModalBox,
  ModalImage,
  ProgramName,
  ProgramHeader,
  CategoryContainer,
  CategoryTag,
  TopLeftBox,
  PointText,
  PointInfoContainer,
  StatusButton,
  ProgramInfoWrapper,
  IconContainer,
  BookmarkIcon,
  BellIcon,
} from "./ContestModal.style";

const ContestsModal = ({ onClose, contestId }) => {
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const fetchContestDetail = async () => {
      try {
        const response = await axios.get(
          `http://3.36.162.164:8080/api/contests/${contestId}`
        );
        setProgram(response.data.data);
        setIsBookmarked(response.data.data.bookmarked);
      } catch (error) {
        console.error("공모전 상세 정보 호출 실패:", error);
      }
    };

    fetchContestDetail();
  }, [contestId]);

  const [isBookmarked, setIsBookmarked] = useState(false);
  const modalRef = useRef(null);

  const { mutate: postBookmark } = usePostUserBookMark();
  const { mutate: getNotificationSettings } = useGetNotificationSettings();

  const handleBackgroundClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!program) return null;

  return (
    <ModalWrapper onClick={handleBackgroundClick}>
      <ModalBox ref={modalRef}>
        <TopLeftBox>
          <PointInfoContainer>
            <PointText>{program.dday}</PointText>
          </PointInfoContainer>
        </TopLeftBox>
        <ModalImage src={program.thumbnail} alt="thumbnail" />
        <ProgramInfoWrapper>
          <ProgramHeader>
            <ProgramName
              as="a"
              href={program.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {program.name}
            </ProgramName>
            {program.status === "모집 중" && (
              <StatusButton status={program.status}>
                <img
                  src={shipIcon}
                  alt="ship icon"
                  style={{
                    width: "1.2vw",
                    height: "2.13vh",
                    marginRight: "0.5rem",
                  }}
                />
                모집 중
              </StatusButton>
            )}
            {program.status === "모집 대기" && (
              <StatusButton status={program.status}>
                <img
                  src={handIcon}
                  alt="hand icon"
                  style={{
                    width: "1.2vw",
                    height: "2.13vh",
                    marginRight: "0.5rem",
                  }}
                />
                모집 예정
              </StatusButton>
            )}
          </ProgramHeader>
          <CategoryContainer>
            <CategoryTag>{program.category}</CategoryTag>
          </CategoryContainer>
        </ProgramInfoWrapper>
        <IconContainer>
          <BookmarkIcon
            onClick={async () => {
              try {
                await postBookmark(
                  { type: "contest", contentId: program.id },
                  {
                    onSuccess: (data) => {
                      const newStatus = data.data.status;
                      setIsBookmarked(newStatus === "on");
                      console.log("Bookmark status:", newStatus);
                    },
                  }
                );
              } catch (error) {
                console.error("Bookmark update failed:", error);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="50"
              fill={isBookmarked ? "#2D63EF" : "none"}
              stroke={isBookmarked ? "#2D63EF" : "#363636"}
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M6 4c0-1.1046.8954-2 2-2h8c1.1046 0 2 .8954 2 2v17l-6-3-6 3V4z" />
            </svg>
          </BookmarkIcon>
          <BellIcon
            onClick={() => {
              const payload = {
                type: "contest",
                contentId: program.id,
              };
              console.log("알림 요청 payload:", payload);
              getNotificationSettings(payload);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9z" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </BellIcon>
        </IconContainer>
      </ModalBox>
    </ModalWrapper>
  );
};

export default ContestsModal;
