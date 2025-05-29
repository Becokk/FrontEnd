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

const Wrapper = styled.div `
    margin-top: 3.25rem;
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

const SubTitle = styled.div `
    color: #626474;
    font-family: "Pretendard-Regular", Helvetica;
    font-size: 26px;
    letter-spacing: -0.65px;
    font-weight: 400;
    line-height: 39px;
    padding-left: 6.43rem;
    white-space: nowrap;
    margin-top: 2.375rem;
    margin-bottom: 5px;
`;

const TitleSection = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
`;

const Title = styled.div `
    color: #363636;
    font-size: 56px;
    font-family: "Pretendard-Medium", Helvetica;
    font-weight: 500;
    line-height: 72.8px;
    margin-top: 8px;
    padding-left: 6.43rem;
    letter-spacing: -1.40px;
    white-space: nowrap;
`;

const DropdownWrapper = styled.div`
    position: absolute;
    top: 1265;
    left: 170;
    z-index: 100;
`;

