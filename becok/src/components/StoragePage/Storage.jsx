import { useState, useEffect } from "react";
import styled from "styled-components";
import Mark from "../StoragePage/Mark";
import Alarm from "../StoragePage/Alarm";

const Storage = () => {
    const [activeCategory, setActiveCategory] = useState(() => {
        return localStorage.getItem('activeCategory') || "알림";
    });

    useEffect(() => {
        const savedCategory = localStorage.getItem('activeCategory');
        if (savedCategory) {
            setActiveCategory(savedCategory);
        }
    }, []);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        localStorage.setItem('activeCategory', category);
    };

    return (
        <Frame>
            <Title>보관함</Title>

            <TabWrapper>
                <Tab
                    active={activeCategory === "알림"}
                    onClick={() => handleCategoryChange("알림")}
                >
                    알림
                </Tab>
                <Tab
                    active={activeCategory === "찜"}
                    onClick={() => handleCategoryChange("찜")}
                >
                    찜
                </Tab>
            </TabWrapper>

            <ContentArea>
                {activeCategory === "알림" && <Alarm />}
                {activeCategory === "찜" && <Mark />}
            </ContentArea>
        </Frame>
    );
};

export default Storage;

const Frame = styled.div`
    position: relative;
    width: 1594px;
    height: 1080px;
    margin: 0 auto;
    background-color: white;
`;

const Title = styled.div`
    position: absolute;
    margin-top: 110px;
    margin-left: 135px;
    font-size: 64px;
    font-weight: 500;
    font-family: "Pretendard-SemiBold", Helvetica;
    letter-spacing: -1.6px;
    line-height: 83.2px;
    color: #363636;
    white-space: nowrap;

`;

const TabWrapper = styled.div`
    position: absolute;
    margin-top: 244px;
    margin-left: 135px;
    display: flex;
    width: 192px;
    height: 48px;
`;

const Tab = styled.div`
    width: 96px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-weight: ${props => props.active ? 600 : 500};
    color: ${props => props.active ? '#2E65F3' : '#b4b4b4'};
    font-family: "Pretendard-Medium", Helvetica;
    letter-spacing: -0.7px;
    line-height: 33.6px;
    position: relative;
    cursor: pointer;

    &:hover {
        color: #2E65F3;
    }

    ${props => props.active && `
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #2E65F3;
        }
    `}
`;

const ContentArea = styled.div`
    position: absolute;
    top: 413px;
    left: 162px;
    width: 1270px;
    height: 667px;
`;
