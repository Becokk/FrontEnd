import React from 'react';
import styled from 'styled-components';

const EmptyModal = () => {
    return (
        <ModalWrapper>
            <ModalContent>
                <MessageText>
                    아직 참여한 비교과프로그램이 없네요.
                    <br />
                    관심있는 비교과 함께 시작해볼까요?
                </MessageText>
            </ModalContent>
        </ModalWrapper>
    );
};

export default EmptyModal;

const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F8F9FE;
    border-radius: 12px;
    min-height: 300px;
`;

const ModalContent = styled.div`
    text-align: center;
    padding: 40px;
`;

const MessageText = styled.p`
    color: #666;
    font-size: 18px;
    line-height: 1.6;
    margin: 0;
    text-align: center;
`;
