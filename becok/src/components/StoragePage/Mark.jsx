import React, { useState } from "react";
import useMarkedPrograms from "../../hooks/useMarkedPrograms";

import ContestModal from "../CardModal/ContestModal";
import ProgramsModal from "../CardModal/ProgramsModal";
import qImage from "../../assets/q.png";
import {
  TableWrapper,
  EmptyMessage,
  StyledTable,
  DeleteButton,
} from "../../styles/StoragePageStyle/Mark.style";

const Mark = ({ memberId }) => {
  const { programs, handleDelete } = useMarkedPrograms(memberId);
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
          찜한 항목이 없습니다.
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
          {programs
            .slice()
            .reverse()
            .map((item, index) => (
              <tr key={item.id}>
                <td>{programs.length - index}</td>
              <td>{item.type || "비교과 프로그램"}</td>
              <td>
                <span
                  style={{
                    cursor: "pointer",
                    color: "#626474",
                    textDecoration: "underline",
                  }}
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
          <ContestModal
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

export default Mark;
