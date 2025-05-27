import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import axios from "axios"; // 원래 코드, 지금은 주석처리

const Mark = ({ id = 1 }) => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // 로컬 스토리지에서 저장된 데이터 불러오기
            const savedPrograms = localStorage.getItem('markedPrograms');
            
            if (savedPrograms) {
                setPrograms(JSON.parse(savedPrograms));
            } else {
                // 초기 데이터 설정
                const mockData = [
                    {
                        id: 7,
                        type: "비교과 프로그램",
                        name: "2025 취업 역량 강화 프로그램",
                        linkUrl: "https://example.com/program/7",
                        startDate: "2025.5.25",
                        endDate: "2025.6.5"
                    },
                    {
                        id: 6,
                        type: "공모전",
                        name: "제 20회 D2B 디자인 페어",
                        linkUrl: "https://example.com/program/6",
                        startDate: "2025.5.14",
                        endDate: "2025.6.8"
                    },
                    {
                        id: 5,
                        type: "비교과 프로그램",
                        name: "제9회 Global Culture Competition",
                        linkUrl: "https://example.com/program/5",
                        startDate: "2025.4.1(월)",
                        endDate: "2025.06.19(수)"
                    },
                    {
                        id: 4,
                        type: "비교과 프로그램",
                        name: "프로그램 명",
                        linkUrl: "https://example.com/program/4",
                        startDate: "모집예정",
                        endDate: ""
                    },
                    {
                        id: 3,
                        type: "공모전",
                        name: "프로그램 명",
                        linkUrl: "https://example.com/program/3",
                        startDate: "접수기간",
                        endDate: ""
                    },
                    {
                        id: 2,
                        type: "비교과 프로그램",
                        name: "프로그램 명",
                        linkUrl: "https://example.com/program/2",
                        startDate: "접수기간",
                        endDate: ""
                    },
                    {
                        id: 1,
                        type: "비교과 프로그램",
                        name: "프로그램 명",
                        linkUrl: "https://example.com/program/1",
                        startDate: "접수기간",
                        endDate: ""
                    }
                ];
                setPrograms(mockData);
                // 초기 데이터를 로컬 스토리지에 저장
                localStorage.setItem('markedPrograms', JSON.stringify(mockData));
            }
        };

        fetchData();
    }, [id]);

    const handleDelete = (idToDelete) => {
        // 프로그램 삭제 및 번호 재정렬
        const filteredPrograms = programs.filter(program => program.id !== idToDelete);
        const updatedPrograms = filteredPrograms.map((program, index) => ({
            ...program,
            id: filteredPrograms.length - index
        }));
        
        // 상태 업데이트
        setPrograms(updatedPrograms);
        
        // 로컬 스토리지 업데이트
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
                                <td>{item.endDate ? `${item.startDate} ~ ${item.endDate}` : item.startDate}</td>
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
    width: 1270px;
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
        padding: 50px 0 52px 0;
        color: #626474;
        font-size: 20px;
        
    }

    th:first-child, td:first-child {
        text-align: center;
        width: 8%;
    }

    th:nth-child(2), td:nth-child(2) {
        padding-left: 89px;
        text-align: left;
    }

    th:nth-child(3), td:nth-child(3) {
        padding-right: 86px;
        text-align: left;
    }

    th:nth-child(4), td:nth-child(4) {
        padding-left: 50px;
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
        font-size: 24px;
        border-bottom: 1px solid #626474;
        padding-bottom: 22px;
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
    font-size: 16px;
    padding: 5px 10px;
    
    &:hover {
        color: #000000;
    }
`;

