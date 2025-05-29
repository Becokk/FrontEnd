import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ContestItem from './ContestItem';
import {getRecommendedContests} from '../../apis/contestlist';

const Contest = () => {
    const [contests, setContests] = useState([]);
    const memberId = localStorage.getItem("memberId") || 7;

    useEffect(()=>{
        const fetchContests = async () => {
            try {
                const response = await getRecommendedContests(memberId);
                setContests(response.data); // "data" 배열만 추출
            } catch (error) {
                console.error("공모전 불러오기 실패:", error);
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
        <ContentWrapper>
            {contests.map((contest) => (
                <ContestItem key={contest.id} contest={contest} />
            ))}
        </ContentWrapper>
    );
};

export default Contest;

const ContentWrapper = styled.div`
    width: 100%;
    background: #F7F9FF;
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
