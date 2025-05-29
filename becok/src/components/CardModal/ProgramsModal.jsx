import React, { useRef, useState, useEffect } from "react";
import { useProgramDetails } from "../../hooks/queries/useProgramDetails";

import { usePostNotificationSettings } from "../../hooks/mutation/NotificationMutation";
import { usePostUserBookMark } from "../../hooks/mutation/BookMarkMutation";
import shipIcon from "../../assets/ship.png";
import handIcon from "../../assets/hand.png";
import noImage from "../../assets/noImage.png";

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
  PointCircle,
  PointInfoContainer,
  DdayText,
  StatusButton,
  ProgramInfoWrapper,
  IconContainer,
  BookmarkIcon,
  BellIcon,
  PointGroup,
} from "../../styles/CardModal/ProgramsModal.style";

const ProgramsModal = ({ onClose, programId }) => {
  const { mutate: postNotification } = usePostNotificationSettings();
  const { mutate: postBookmark } = usePostUserBookMark();
  const { program, isBookmarked, setIsBookmarked } =
    useProgramDetails(programId);
  const [isNotified, setIsNotified] = useState(false);

  useEffect(() => {
    if (program) {
      console.log("ProgramsModal program response:", program);
      setIsNotified(!!program.notification);
      setIsBookmarked(!!program.bookmarked);
    }
  }, [program, setIsBookmarked]);
  const modalRef = useRef(null);

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
            <PointGroup>
              <PointCircle>P</PointCircle>
              <PointText>{program.point}</PointText>
            </PointGroup>
            <DdayText>
              D-
              {Math.ceil(
                (new Date(program.endDate) - new Date()) / (1000 * 60 * 60 * 24)
              )}
            </DdayText>
          </PointInfoContainer>
        </TopLeftBox>
        <ModalImage
          src={program.thumbnailUrl || noImage}
          alt="thumbnail"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = noImage;
          }}
        />
        <ProgramInfoWrapper>
          <ProgramHeader>
            <a href={program.linkUrl} target="_blank" rel="noopener noreferrer">
              <ProgramName>{program.title}</ProgramName>
            </a>
            {program.status === "ONGOING" && (
              <StatusButton status={program.status?.trim()}>
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
            {program.status === "UPCOMING" && (
              <StatusButton status={program.status?.trim()}>
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
            {Array.isArray(program.category) && program.category.length > 0 ? (
              program.category.map((tag, idx) => {
                const normalizedTag = tag.replace(/^#+/, "#");
                return <CategoryTag key={idx}>{normalizedTag}</CategoryTag>;
              })
            ) : (
              <CategoryTag>카테고리 없음</CategoryTag>
            )}
          </CategoryContainer>
        </ProgramInfoWrapper>
        <IconContainer>
          <BookmarkIcon
            onClick={() => {
              console.log("북마크 클릭됨");
              postBookmark(
                { type: "program", contentId: program.id },
                {
                  onSuccess: (res) => {
                    const newStatus = res.data?.status;
                    setIsBookmarked(newStatus === "on");
                  },
                  onError: (err) => {
                    console.error("북마크 처리 실패:", err);
                  },
                }
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
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
              console.log("알림 버튼 클릭됨");
              postNotification(
                { type: "program", contentId: program.id },
                {
                  onSuccess: (res) => {
                    const newStatus = res.data?.status;
                    setIsNotified(newStatus === "on");
                  },
                  onError: (err) => {
                    console.error("알림 설정 실패:", err);
                  },
                }
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill={isNotified ? "#FFD700" : "none"}
              stroke={isNotified ? "#FFD700" : "#363636"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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

export default ProgramsModal;
