import React, {useState} from "react";
import styled from "styled-components";
import RoadMap from "../components/PlanPage/RoadMap";
import Contest from "../components/PlanPage/Contest";
import Dropdown from "../components/Homepage/Dropdown";

const PlanPage = () => {
    const [activeView, setActiveView] = useState("roadmap");

    const handleCategoryChange = (category) => {
        if (category === "비교과 프로그램") {
            setActiveView("roadmap");
        } else if (category === "공모전") {
            setActiveView("contest");
        }
    };

    console.log("planpage 랜더링됨, 현재 뷰 : ", activeView);

    return (
        <Wrapper>
            <DropdownWrapper>
                <Dropdown setCategory={handleCategoryChange}/>
            </DropdownWrapper>

            {
                activeView === "roadmap"
                    ? (
                        <> < SubTitle > 당신의 목표와 활동기반으로 추천된,
                        </SubTitle>
                    <TitleSection>
                        <Title>맞춤형 비교과 로드맵</Title>
                    </TitleSection>
                    <RoadMap/>
                </>
                    )
                    : (
                        <> < SubTitle > 당신의 목표와 활동기반으로 추천된,
                        </SubTitle>
                    <TitleSection>
                        <Title>맞춤형 공모전 큐레이션</Title>
                    </TitleSection>
                    <Contest/>
                </>
                    )
            }
        </Wrapper>
    );
};

export default PlanPage;

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 4rem);
    padding: clamp(1rem, 3vw, 2rem);
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #ddd;
        border-radius: 0.25rem;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #ccc;
    }
`;

const SubTitle = styled.div`
    color: #626474;
    font-family: "Pretendard-Regular", Helvetica;
    font-size: clamp(1.25rem, 2vw, 1.625rem);
    letter-spacing: -0.04em;
    font-weight: 400;
    line-height: 1.5;
    padding-left: clamp(2rem, 6vw, 6.43rem);
    white-space: nowrap;
    margin-top: -2.5rem;
    margin-bottom: 0.3125rem;

    @media (max-width: 768px) {
        white-space: normal;
    }
`;

const TitleSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1.25rem;
`;

const Title = styled.div`
    color: #363636;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-family: "Pretendard-Medium", Helvetica;
    font-weight: 500;
    line-height: 1.3;
    margin-top: 0.5rem;
    padding-left: clamp(2rem, 6vw, 6.43rem);
    letter-spacing: -0.02em;
    white-space: nowrap;

    @media (max-width: 768px) {
        white-space: normal;
    }
`;

const DropdownWrapper = styled.div`
    margin-left: min(75vw, 1210px);
    margin-top: -10.625rem;

    @media (max-width: 1440px) {
        margin-left: min(70vw, 1000px);
    }

    @media (max-width: 1024px) {
        margin-left: min(65vw, 800px);
    }

    @media (max-width: 768px) {
        margin-left: auto;
        margin-right: 2rem;
    }
`;

