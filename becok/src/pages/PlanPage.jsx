import React, { useState } from "react";
import styled from "styled-components";
import RoadMap from "../components/PlanPage/RoadMap";
import Contest from "../components/PlanPage/Contest";

const PlanPage = () => {
    const [activeView, setActiveView] = useState('roadmap');

    return (
        <Wrapper>
            <DropdownWrapper>
                <Dropdown value={activeView} onChange={(e) => setActiveView(e.target.value)}>
                    <option value="roadmap">비교과 프로그램</option>
                    <option value="contest">공모전</option>
                </Dropdown>
            </DropdownWrapper>
            {activeView === "roadmap" ? (
                <>
                    <SubTitle>당신의 목표와 활동기반으로 추천된,</SubTitle>
                    <TitleSection>
                        <Title>맞춤형 학기별 비교과 로드맵</Title>
                    </TitleSection>
                    <RoadMap />
                </>
            ) : (
                <>
                    <SubTitle>당신의 목표와 활동기반으로 추천된,</SubTitle>
                    <TitleSection>
                        <Title>맞춤형 공모전 큐레이션</Title>
                    </TitleSection>
                    <Contest />
                </>
            )}
        </Wrapper>
    );
};

export default PlanPage;

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 64px);
    padding: 2rem;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #ddd;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #ccc;
    }
`;

const SubTitle = styled.div`
    color: #626474;
    font-size: 26px;
    font-weight: 400;
    line-height: 39px;
    padding-left: 140px;
`;

const TitleSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
`;

const Title = styled.div`
    color: #363636;
    font-size: 45px;
    font-weight: 500;
    line-height: 72.8px;
    white-space: nowrap;
    margin-top: 8px;
    padding-left: 140px;
`;

const DropdownWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
`;

const Dropdown = styled.select`
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    border-radius: 12px;
    background: #f6f9fe;
    color: #666;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    outline: none;

    &:hover {
        background: #e8e8f0;
    }
`;
