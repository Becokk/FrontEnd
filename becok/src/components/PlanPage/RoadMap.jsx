import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const RoadMap = () => {
    const [programs, setPrograms] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(5);
    const [nextMonth, setNextMonth] = useState(6);

    const assignRows = (programs) => {
        const sortedPrograms = [...programs].sort((a, b) => {
            const dateCompare = new Date(a.startDate) - new Date(b.startDate);
            if (dateCompare === 0) {
                return a.name.localeCompare(b.name);
            }
            return dateCompare;
        });

        const rows = [];
        sortedPrograms.forEach(program => {
            const start = new Date(program.startDate);
            const end = new Date(program.endDate);
            
            let row = 0;
            let foundRow = false;
            
            while (!foundRow) {
                foundRow = true;
                if (!rows[row]) {
                    rows[row] = [];
                } else {
                    for (const existingProgram of rows[row]) {
                        const existingStart = new Date(existingProgram.startDate);
                        const existingEnd = new Date(existingProgram.endDate);
                        
                        if (!(end < existingStart || start > existingEnd)) {
                            foundRow = false;
                            row++;
                            break;
                        }
                    }
                }
            }
            
            program.row = row;
            rows[row].push(program);
        });

        const totalRows = rows.length;
        const baseSpacing = totalRows <= 3 ? 120 : 80; 

        return sortedPrograms.map(program => ({
            ...program,
            verticalPosition: program.row * baseSpacing + 20
        }));
    };

    useEffect(() => {
        const savedPrograms = JSON.parse(localStorage.getItem('savedPrograms') || '[]');
        
        const deletedPrograms = [
            {
                id: 6,
                type: "공모전",
                name: "제 20회 D2B 디자인 페어",
                linkUrl: "https://example.com/program/6",
                startDate: "2025.5.14",
                endDate: "2025.6.8"
            },
            {
                id: 5,
                type: "비교과 프로그램",
                name: "제9회 Global Culture Competition",
                linkUrl: "https://example.com/program/5",
                startDate: "2025.4.1",
                endDate: "2025.06.19"
            },
            {
                id: 4,
                type: "비교과 프로그램",
                name: "프로그램 명",
                linkUrl: "https://example.com/program/4",
                startDate: "모집예정",
                endDate: ""
            },
            {
                id: 3,
                type: "공모전",
                name: "프로그램 명",
                linkUrl: "https://example.com/program/3",
                startDate: "접수기간",
                endDate: ""
            },
            {
                id: 2,
                type: "비교과 프로그램",
                name: "프로그램 명",
                linkUrl: "https://example.com/program/2",
                startDate: "접수기간",
                endDate: ""
            },
            {
                id: 1,
                type: "비교과 프로그램",
                name: "프로그램 명",
                linkUrl: "https://example.com/program/1",
                startDate: "접수기간",
                endDate: ""
            }
        ];

        localStorage.setItem('savedPrograms', JSON.stringify([...savedPrograms, ...deletedPrograms]));

        const mockResponse = {
            isSuccess: true,
            code: "SUCCESS_200",
            httpStatus: 200,
            message: "조회에 성공하였습니다.",
            data: {
                recommended_program: [
                    {
                        program_id: 1,
                        name: "[미래역량] 2025년 자기소개서 작성법",
                        startDate: `2025-${String(currentMonth).padStart(2, '0')}-05`,
                        endDate: `2025-${String(currentMonth).padStart(2, '0')}-10`
                    },
                    {
                        program_id: 2,
                        name: "제 9회 Global Creative Competition",
                        startDate: `2025-${String(currentMonth).padStart(2, '0')}-10`,
                        endDate: `2025-${String(currentMonth).padStart(2, '0')}-15`
                    },
                    {
                        program_id: 3,
                        name: "3D 프린팅 기초교육",
                        startDate: `2025-${String(currentMonth).padStart(2, '0')}-15`,
                        endDate: `2025-${String(currentMonth).padStart(2, '0')}-20`
                    },
                    {
                        program_id: 4,
                        name: "창업과 지식재산권의 이해",
                        startDate: `2025-${String(currentMonth).padStart(2, '0')}-15`,
                        endDate: `2025-${String(currentMonth).padStart(2, '0')}-25`
                    },
                    {
                        program_id: 5,
                        name: "2025년 취업 역량 강화 프로그램",
                        startDate: `2025-${String(currentMonth).padStart(2, '0')}-25`,
                        endDate: `2025-${String(nextMonth).padStart(2, '0')}-05`
                    },
                    {
                        program_id: 6,
                        name: "글로벌 역량 강화 프로그램",
                        startDate: `2025-${String(nextMonth).padStart(2, '0')}-05`,
                        endDate: `2025-${String(nextMonth).padStart(2, '0')}-10`
                    },
                    {
                        program_id: 7,
                        name: "2025 커리어 개발 프로그램",
                        startDate: `2025-${String(nextMonth).padStart(2, '0')}-10`,
                        endDate: `2025-${String(nextMonth).padStart(2, '0')}-25`
                    },
                    {
                        program_id: 8,
                        name: "2025학년도 취업역량 마일리지 환급액 및 신청안내",
                        startDate: `2025-${String(nextMonth).padStart(2, '0')}-01`,
                        endDate: `2025-${String(nextMonth).padStart(2, '0')}-28`
                    }
                ]
            }
        };

        const programsWithRows = assignRows(mockResponse.data.recommended_program);
        setPrograms(programsWithRows);
    }, [currentMonth, nextMonth]);

    const calculatePosition = (date) => {
        const startOfMonth = new Date(`2025-${String(currentMonth).padStart(2, '0')}-01`);
        const targetDate = new Date(date);
        const daysDiff = Math.floor((targetDate - startOfMonth) / (1000 * 60 * 60 * 24));
        return Math.max(0, (daysDiff / 60) * 100);
    };

    const calculateWidth = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const daysDiff = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
        return Math.min(100, Math.max(10, (daysDiff / 60) * 100));
    };

    return (
        <RoadMapWrapper>
            <MonthsContainer>
                <MonthSection>
                    <MonthLabel>{currentMonth}월</MonthLabel>
                    <MonthUnderline />
                </MonthSection>
                <MonthSection>
                    <MonthLabel>{nextMonth}월</MonthLabel>
                </MonthSection>
            </MonthsContainer>
            <TimelineContainer>
                <DashedDivider style={{ left: '12.5%' }} />
                <MidMonthDivider style={{ left: '25%' }} />
                <DashedDivider style={{ left: '37.5%' }} />
                <MonthDivider />
                <DashedDivider style={{ left: '62.5%' }} />
                <MidMonthDivider style={{ left: '75%' }} />
                <DashedDivider style={{ left: '87.5%' }} />
                {programs.map((program) => (
                    <ProgramBlock
                        key={program.program_id}
                        style={{
                            left: `${calculatePosition(program.startDate)}%`,
                            width: `${calculateWidth(program.startDate, program.endDate)}%`,
                            top: `${program.verticalPosition}px`
                        }}
                    >
                        <ProgramText>{program.name}</ProgramText>
                    </ProgramBlock>
                ))}
            </TimelineContainer>
        </RoadMapWrapper>
    );
};

export default RoadMap;

const RoadMapWrapper = styled.div`
    padding: 30px 0;
    width: 100%;
    box-sizing: border-box;
`;

const MonthsContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    position: relative;
    padding: 0 40px;
`;

const MonthSection = styled.div`
    flex: 1;
    text-align: center;
    position: relative;
`;

const MonthLabel = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: #363636;
    padding-bottom: 10px;
`;

const MonthUnderline = styled.div`
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #2E65F3;
`;

const TimelineContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 600px;
    padding: 20px 40px;
    background: #F8F9FE;
    border-radius: 12px;
    box-sizing: border-box;
`;

const BaseDivider = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    z-index: 1;
`;

const MonthDivider = styled(BaseDivider)`
    left: 50%;
    background: #E8E8E8;
`;

const MidMonthDivider = styled(BaseDivider)`
    background: #E8E8E8;
    border: none;
    width: 3px;
`;

const DashedDivider = styled(BaseDivider)`
    border-left: 3px dashed #E8E8E8;
    background: transparent;
`;

const ProgramBlock = styled.div`
    position: absolute;
    background: linear-gradient(102deg, rgba(46, 101, 243, 0.2) 0%, rgba(23, 52, 240, 0.2) 100%);
    border-radius: 25px;
    padding: 20px 30px;
    height: 45px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 0 10px;
    z-index: 2;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

const ProgramText = styled.div`
    color: #56627E;
    font-family: 'Pretendard-SemiBold', Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 24px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;