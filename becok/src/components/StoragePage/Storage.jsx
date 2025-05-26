import React, {useState, useEffect} from "react";
import styled from "styled-components";
import StorageBecok from "../../assets/StorageBecok.png";
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
        <StorageContain>
            <Title>보관함</Title>

            <Category>
                <Item 
                    active={activeCategory === "알림"} 
                    onClick={() => handleCategoryChange("알림")}
                >
                    알림
                </Item>
                <Item 
                    active={activeCategory === "찜"} 
                    onClick={() => handleCategoryChange("찜")}
                >
                    찜
                </Item>
            </Category>

            {activeCategory === "알림" && <Alarm/>}
            {activeCategory === "찜" && <Mark />}
            <BecokImage src={StorageBecok} alt="리멤버 이미지"/>
        </StorageContain>
    );
};

export default Storage;

const StorageContain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 80px 0 0 150px;
`

const Title = styled.div`
    color: #363636;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 64px;
    font-weight: 500;
    letter-spacing: -1.6px;
    line-height: 83.2px;
    white-space: nowrap;
    margin-bottom: 24px;
`

const BecokImage = styled.img`
    width: 124px;
    height: 124px;
    opacity: 0.5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`

const Category = styled.div`
    display: flex;
    gap: 32px;
    margin-bottom: 40px;
    padding-left: 25px;
`

const Item = styled.div`
    color: ${props => props.active ? '#2E65F3' : '#898EAE'};
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 24px;
    font-weight: ${props => props.active ? '600' : '400'};
    letter-spacing: -0.6px;
    line-height: 33.6px;
    cursor: pointer;
    position: relative;
    padding-bottom: 8px;
    
    &:hover {
        color: #2E65F3;
    }

    ${props => props.active && `
        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #2E65F3;
        }
    `}
`