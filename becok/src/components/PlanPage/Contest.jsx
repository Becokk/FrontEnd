import React from "react";
import styled from "styled-components";

const Contest = () => {
    return (
        <ContestContainer>
            <Title>공모전 준비중입니다.</Title>
        </ContestContainer>
    );
};

export default Contest;

const ContestContainer = styled.div`
    width: 100%;
    padding: 20px;
`;

const Title = styled.h2`
    font-size: 24px;
    color: #626474;
    text-align: center;
    margin-top: 40px;
`;
