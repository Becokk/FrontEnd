import React from 'react';
import styled from 'styled-components';

const EmptyModal = () => {
    return (
        <ModalOverlay>
            <ModalWrapper>
                <ModalContent>
                    <MessageText>
                        아직 참여한 비교과프로그램이 없네요.
                        <br />
                        괜찮아요. 비콕과 함께 시작해볼까요?
                    </MessageText>
                </ModalContent>
            </ModalWrapper>
        </ModalOverlay>
    );
};

export default EmptyModal;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e0e3ec4c;
    backdrop-filter: blur(12px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

const ModalContent = styled.div`
    text-align: center;
    padding: 1rem;
`;

const MessageText = styled.p`
    color: #48484e;
    font-size: 48px;
    font-weight: 500;
    margin: 0;
    text-align: center;
    font-family: "Pretendard-Medium", Helvetica;
    letter-spacing: -1.20px;
    line-height: 72px;
    text-shadow: 0px 4px 4px #48484e1a;
    white-space: pre-line;

    @media (max-width: 768px) {
        font-size: 32px;
        line-height: 48px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        line-height: 36px;
    }
`;


