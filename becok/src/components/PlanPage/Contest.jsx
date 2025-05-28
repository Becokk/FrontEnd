import React from 'react';
import styled from 'styled-components';
import ContestItem from './ContestItem';

const Contest = () => {
    const memberId = localStorage.getItem("memberId");

    return (
        <ContentWrapper>
            {Array.from({ length: 9 }).map((_, index) => (
                <ContestItem key={index} />
            ))}
        </ContentWrapper>
    );
};

export default Contest;

const ContentWrapper = styled.div`
    width: 100%;
    background: #F8F9FE;
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
