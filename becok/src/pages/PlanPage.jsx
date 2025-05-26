import React, { useState } from "react";
import styled from "styled-components";
import RoadMap from "../components/PlanPage/RoadMap";
import Contest from "../components/PlanPage/Contest";

const PlanPage = () => {
    const [activeView, setActiveView] = useState('roadmap');

    return (
        <PlanWrapper>
            <ContentContainer>
                <SubTitle>당신의 목표와 활동기반으로 추천된,</SubTitle>
                <TitleSection>
                    <Title>맞춤형 학기별 비교과 로드맵</Title>
                    <TabContainer>
                        <TabWrapper>
                            <SlideCircle active={activeView} />
                            <Tab 
                                active={activeView === 'roadmap'} 
                                onClick={() => setActiveView('roadmap')}
                            >
                                비교과 프로그램
                            </Tab>
                            <Tab 
                                active={activeView === 'contest'} 
                                onClick={() => setActiveView('contest')}
                            >
                                공모전
                            </Tab>
                        </TabWrapper>
                    </TabContainer>
                </TitleSection>
                {activeView === 'roadmap' ? <RoadMap /> : <Contest />}
            </ContentContainer>
        </PlanWrapper>
    );
};

export default PlanPage;

const PlanWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2rem;
    box-sizing: border-box;
`;

const ContentContainer = styled.div`
    margin-top: 40px;
    margin-left: 0;
`;

const SubTitle = styled.div`
    color: #626474;
    font-family: "Pretendard-Regular", Helvetica;
    font-size: 26px;
    font-weight: 400;
    letter-spacing: -0.65px;
    line-height: 39px;
    white-space: nowrap;
    padding-left: 10px;
`;

const TitleSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`;

const Title = styled.div`
    color: #363636;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 45px;
    font-weight: 500;
    letter-spacing: -1.40px;
    line-height: 72.8px;
    white-space: nowrap;
    margin-top: 8px;
    padding-left: 10px;
`;

const TabContainer = styled.div`
    margin-left: 32px;
`;

const TabWrapper = styled.div`
    display: inline-flex;
    position: relative;
    padding: 6px;
    background: #F1F1F4;
    border-radius: 100px;
    min-width: 300px;
`;

const SlideCircle = styled.div`
    position: absolute;
    top: 6px;
    left: 6px;
    width: 144px;
    height: 36px;
    background: #2E65F3;
    border-radius: 100px;
    transition: transform 0.3s ease;
    transform: translateX(${props => props.active === 'contest' ? '144px' : '0'});
`;

const Tab = styled.div`
    position: relative;
    padding: 8px 0;
    width: 144px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.active ? '#FFFFFF' : '#898EAE'};
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1;

    &:hover {
        color: ${props => props.active ? '#FFFFFF' : '#2E65F3'};
    }
`;
