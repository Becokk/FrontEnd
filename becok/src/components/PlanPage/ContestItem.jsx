import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Bookmark from '../../assets/bookmark.png';
import CheckedBookmark from '../../assets/checkedbookmark.png';
import Alarm from '../../assets/checkedalarm.png';
import CheckedAlarm from '../../assets/checkedalarm.png';
import StatusImg from '../../assets/status.png';
import {getRecommendedContests} from "../../apis/contestlist";

const ContestItem = () => {
    const [contests, setContests] = useState([]);

    useEffect(() => {
        const fetchContests = async () => {
            try {
                const memberId = localStorage.getItem("memberId");
                const response = await getRecommendedContests(memberId);
                setContests(response.data.recommended_contest);
            } catch (error) {
                console.error("공모전 큐레이션을 불러오지 못했습니다.", error);
            }
        };
        fetchContests();
    }, []);

    return (<>
    {contests.map((contest) => (
            <Card key={contest.id}>
                <ImageWrapper>
                    <Image bg={contest.imgUrl}/>
                    <Dday>
                        <DdayGroup>
                            <DdayDash>D-</DdayDash>
                            <DdayNum>{contest.dday?.replace("D-", "") || "?"}</DdayNum>
                        </DdayGroup>
                    </Dday>
                </ImageWrapper>
                <Content>
                    <TitleRow>
                        <Title>{contest.name}</Title>
                        <Status>
                            <img src={StatusImg} alt="status"/> {contest.status}
                        </Status>
                    </TitleRow>
                    <Tags>
                        {contest.category?.split("/")?.map((tag, i) => (
                        <Tag key={i}>#{tag.trim()}</Tag>
                    ))}

                    </Tags>
                    <Actions>
                        <img
                            src={contest.bookmarked
                                ? CheckedBookmark
                                : Bookmark}
                            alt="bookmark"/>
                        <img
                            src={contest.notification
                                ? CheckedAlarm
                                : Alarm}
                            alt="alarm"/>
                    </Actions>
                </Content>
            </Card>
        ))} 
        </>
    );
};

export default ContestItem;

const Card = styled.div`
    background-color: #f7f9ff;
    width: 100%;
    height: auto;
    min-height: 310px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    padding-bottom: 2px;
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
    position: relative;
    height: 130px;

    @media (max-width: 768px) {
        height: 120px;
    }
`;

const Image = styled.div`
    height: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
`;

const Dday = styled.div`
    position: absolute;
    top: 22px;
    right: 12px;
    background-color: #d52525;
    border-radius: 15px 0px 0px 15px;
    padding: 7px 24px 7px 24px;
    color: white;
    width: auto;
    z-index: 10;
`;

const DdayGroup = styled.div`
    display: flex;
    align-items: baseline;
    gap: 4px;
`;

const DdayDash = styled.div`
    font-size: 36px;
    font-weight: 600;
    color: white;
`;

const DdayNum = styled.div`
    font-size: 36px;
    font-weight: 700;
    color: white;
`;


const Content = styled.div`
    position: relative;
    padding: 16px 28px 0 28px;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #363636;
    line-height: 33.6px;
    letter-spacing: -0.6px;
    white-space: nowrap;
    margin-top: 12px;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 1024px) {
        font-size: 22px;
        line-height: 30px;
    }

    @media (max-width: 768px) {
        font-size: 20px;
        line-height: 28px;
    }
`;

const Status = styled.div`
    font-size: 13px;
    color: white;
    background-color: #2e65f3;
    padding: 4px 10px;
    border-radius: 12px;
    font-weight: bold;
    display: inline-block;
    margin-top: 8px;
    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 3px 8px;
    }
`;

const Tags = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 12px;
    flex-wrap: wrap;
`;

const Tag = styled.div`
    font-size: 17px;
    font-weight: 500;
    color: #747e96;
    letter-spacing: -0.42px;
    white-space: nowrap;

    @media (max-width: 1024px) {
        font-size: 16px;
    }

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

const Actions = styled.div`
    position: absolute;
    top: calc(12px + 33.6px + 8px + 24px + 40px);
    right: 28px;
    display: flex;
    gap: 12px;
    
    img {
        width: 32px;
        height: 32px;

        @media (max-width: 768px) {
            width: 28px;
            height: 28px;
        }
    }

    @media (max-width: 768px) {
        right: 20px;
        gap: 8px;
    }
`;
const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    @media (max-width: 768px) {
        gap: 12px;
    }
`;