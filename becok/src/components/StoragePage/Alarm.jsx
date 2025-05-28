import React, { useState } from "react";
import qImage from "../../assets/q.png";
import styled from "styled-components";
import useNotifiedPrograms from "../../hooks/useNotifiedPrograms";
import ContestsModal from "../CardModal/ContestModal";
import ProgramsModal from "../CardModal/ProgramsModal";

const Alarm = ({ memberId }) => {
  const { programs, handleDelete } = useNotifiedPrograms(memberId);
  const [selectedCard, setSelectedCard] = useState(null);

  if (!programs || programs.length === 0) {
    return (
      <TableWrapper>
        <EmptyMessage>
          <img
            src={qImage}
            alt="info"
            style={{ height: "3rem", marginBottom: "5.65vh" }}
          />
          알림설정한 항목이 없습니다.
        </EmptyMessage>
      </TableWrapper>
    );
  }

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>번호</th>
            <th>분류</th>
            <th>제목</th>
            <th>접수기간</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {programs.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.type || "비교과 프로그램"}</td>
              <td>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setSelectedCard({
                      id: item.linkUrl.split("/").pop(),
                      type: item.type,
                      name: item.name,
                    })
                  }
                >
                  {item.name}
                </span>
              </td>
              <td>{item.startDate}</td>
              <td>
                <DeleteButton onClick={() => handleDelete(item.id)}>
                  X
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      {selectedCard &&
        (selectedCard.type === "공모전" ? (
          <ContestsModal
            contestId={selectedCard.id}
            onClose={() => setSelectedCard(null)}
          />
        ) : (
          <ProgramsModal
            programId={selectedCard.id}
            onClose={() => setSelectedCard(null)}
          />
        ))}
    </TableWrapper>
  );
};

export default Alarm;

const TableWrapper = styled.div`
  width: min(1270px, 66.15vw);
  border-radius: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Pretendard-Regular", Helvetica;
  table-layout: fixed;

  td {
    border-bottom: 1px solid #e0e0e0;
    text-align: left;
    padding: min(50px, 2.6vw) 0 min(52px, 2.7vw) 0;
    color: #626474;
    font-size: min(20px, 1.04vw);
  }

  th:first-child,
  td:first-child {
    text-align: center;
    width: 8%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    padding-left: min(89px, 4.63vw);
    text-align: left;
  }

  th:nth-child(3),
  td:nth-child(3) {
    padding-right: min(86px, 4.48vw);
    text-align: left;
  }

  th:nth-child(4),
  td:nth-child(4) {
    padding-left: min(50px, 2.6vw);
    text-align: left;
  }

  th:last-child,
  td:last-child {
    width: 5%;
    background: none;
    text-align: left;
  }

  td:last-child {
    border: none;
  }

  th {
    font-weight: 600;
    font-size: min(24px, 1.25vw);
    border-bottom: 1px solid #626474;
    padding-bottom: min(22px, 1.15vw);
    color: #b4b4b4;
  }

  th:last-child {
    background: none;
    padding-left: 0;
    padding-right: 0;
  }

  td a {
    color: #626474;
    text-decoration: none;
    font-weight: 500;

    &:link,
    &:visited {
      text-decoration: none;
    }

    &:active,
    &:focus {
      text-decoration: underline;
    }

    &:visited:active {
      text-decoration: underline;
    }
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  cursor: pointer;
  font-size: min(16px, 0.83vw);
  padding: min(5px, 0.26vw) min(10px, 0.52vw);

  &:hover {
    color: #000000;
  }
`;

const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: min(300px, 20vh);
  font-family: "Pretendard", sans-serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #cecece;
  text-align: center;
  padding: 0 1rem;
  vertical-align: middle;
`;
