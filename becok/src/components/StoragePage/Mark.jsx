import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import axios from "axios"; // 원래 코드, 지금은 주석처리

const Mark = ({ memberId }) => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://3.36.162.164:8080/api/remember?memberId=${memberId}&view=bookmark`);
                const result = await response.json();
                if (result.isSuccess && Array.isArray(result.data)) {
                    const reversedData = result.data.slice().reverse().map((item, index, arr) => ({
                        id: arr.length - index,
                        type: item.domain === "contest" ? "공모전" : "비교과 프로그램",
                        name: item.title,
                        startDate: item.period,
                        endDate: null,
                        linkUrl: `/${item.domain}/${item.contentId}`
                    }));
                    setPrograms(reversedData);
                } else {
                    console.error("API 응답 실패 또는 형식 오류", result);
                }
            } catch (error) {
                console.error("데이터를 불러오는 중 오류 발생:", error);
            }
        };

        fetchData();
    }, [memberId]);

    const handleDelete = async (idToDelete) => {
        const programToDelete = programs.find(program => program.id === idToDelete);
        if (!programToDelete) return;

        const contentId = programToDelete.linkUrl.split("/").pop();
        const type = programToDelete.type === "공모전" ? "contest" : "program";

        try {
            await fetch(`http://3.36.162.164:8080/api/bookmark/${memberId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ type, contentId: parseInt(contentId) })
            });
        } catch (error) {
            console.error("Bookmark API 요청 실패:", error);
        }

        const filteredPrograms = programs.filter(program => program.id !== idToDelete);
        const updatedPrograms = filteredPrograms.map((program, index) => ({
            ...program,
            id: filteredPrograms.length - index
        })).sort((a, b) => b.id - a.id); // Ensure descending order
        setPrograms(updatedPrograms);
        localStorage.setItem('markedPrograms', JSON.stringify(updatedPrograms));
    };

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
                    {
                        programs.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.type || "비교과 프로그램"}</td>
                                <td>
                                    <a href={item.linkUrl} target="_blank" rel="noreferrer">
                                        {item.name}
                                    </a>
                                </td>
                                <td>{item.startDate}</td>
                                <td>
                                    <DeleteButton onClick={() => handleDelete(item.id)}>X</DeleteButton>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </StyledTable>
        </TableWrapper>
    );
};

export default Mark;

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

    th:first-child, td:first-child {
        text-align: center;
        width: 8%;
    }

    th:nth-child(2), td:nth-child(2) {
        padding-left: min(89px, 4.63vw);
        text-align: left;
    }

    th:nth-child(3), td:nth-child(3) {
        padding-right: min(86px, 4.48vw);
        text-align: left;
    }

    th:nth-child(4), td:nth-child(4) {
        padding-left: min(50px, 2.6vw);
        text-align: left;
    }

    th:last-child, td:last-child {
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
        color: #B4B4B4
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

        &:link, &:visited {
            text-decoration: none;
        }

        &:active, &:focus {
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
