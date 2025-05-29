import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetRecommendRoadMap } from "../../apis/roadmap";
import ProgramsModal from "../CardModal/ProgramsModal";

// 색상 관련 함수
const getTagColor = (tag, isFiltered) => {
    if (!isFiltered) return "#56627E";
    switch (tag) {
        case "창의융합 역량": return "#F9C8DC";
        case "공동체 역량": return "#FAD99D";
        case "글로벌 역량": return "#B6EBF4";
        default: return "#F2F0F0";
    }
};

const getTextColor = (competencyName) => {
    switch (competencyName) {
        case "창의융합 역량": return "#695861";
        case "공동체 역량": return "#5B472A";
        case "글로벌 역량": return "#426466";
        default: return "#56627E";
    }
};

// RoadMapContent
const RoadMapContent = ({
    currentMonth,
    nextMonth,
    programs,
    calculatePosition,
    calculateWidth,
    activeFilter,
    onProgramClick
}) => (
    <RoadMapWrapper>
        <MonthsContainer>
            <MonthSection><MonthLabel>{currentMonth}월</MonthLabel><MonthUnderline /></MonthSection>
            <MonthSection><MonthLabel>{nextMonth}월</MonthLabel></MonthSection>
        </MonthsContainer>
        <TimelineContainer>
            {[12.5, 25, 37.5, 62.5, 75, 87.5].map(pos => (
                <DashedDivider key={pos} style={{ left: `${pos}%` }} />
            ))}
            <MonthDivider />
            {programs.map(program => {
                const isActive = !activeFilter || program.competencyName === activeFilter;
                const textColor = isActive ? getTextColor(program.competencyName) : "#B1B1B1";
                return (
                    <ProgramBlock
                        key={program.program_id}
                        style={{
                            left: `${calculatePosition(program.startDate)}%`,
                            width: `${calculateWidth(program.startDate, program.endDate)}%`,
                            top: `${program.verticalPosition}px`,
                            background: activeFilter
                                ? isActive
                                    ? getTagColor(activeFilter, true)
                                    : "#8E8E8E1A"
                                : "linear-gradient(102deg, rgba(46, 101, 243, 0.2) 0%, rgba(23, 52, 240, 0.2) 100%)"
                        }}
                        onClick={() => onProgramClick(program)}
                    >
                        <ProgramText style={{ color: textColor }}>{program.title}</ProgramText>
                    </ProgramBlock>
                );
            })}
        </TimelineContainer>
    </RoadMapWrapper>
);

// RoadMap 메인
const RoadMap = () => {
    const now = new Date();
    const thisMonth = now.getMonth() + 1;
    const nextMonth = thisMonth === 12 ? 1 : thisMonth + 1;

    const [programs, setPrograms] = useState([]);
    const [currentMonth] = useState(thisMonth);
    const [nextMonthState] = useState(nextMonth);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);

    const getCompetencyName = (competencies) => {
        const labels = ["창의융합 역량", "공동체 역량", "글로벌 역량"];
        const indices = [0, 3, 4]; // 매핑 위치
        let maxIdx = 0;
        let maxVal = competencies[indices[0]];
        for (let i = 1; i < indices.length; i++) {
            if (competencies[indices[i]] > maxVal) {
                maxVal = competencies[indices[i]];
                maxIdx = i;
            }
        }
        return maxVal > 0 ? labels[maxIdx] : "";
    };

    const assignRows = (programs) => {
        const sorted = [...programs].sort((a, b) => {
            const aDur = new Date(a.endDate) - new Date(a.startDate);
            const bDur = new Date(b.endDate) - new Date(b.startDate);
            return aDur !== bDur ? bDur - aDur : a.title.localeCompare(b.title, "ko");
        });

        const rows = [];
        sorted.forEach(p => {
            const s = new Date(p.startDate), e = new Date(p.endDate);
            let row = 0, placed = false;
            while (!placed) {
                if (!rows[row]) rows[row] = [];
                if (rows[row].every(ex => e < new Date(ex.startDate) || s > new Date(ex.endDate))) {
                    rows[row].push(p);
                    placed = true;
                } else row++;
            }
            p.row = row;
        });

        const spacing = 100;
        return sorted.map(p => ({ ...p, verticalPosition: p.row * spacing + 40 }));
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                const memberId = 7;
                const res = await GetRecommendRoadMap(memberId);
                const enriched = res.data.map(p => ({
                    ...p,
                    competencyName: getCompetencyName(p.competencies)
                }));
                const withRows = assignRows(enriched);
                setPrograms(withRows);
            } catch (err) {
                console.error("로드맵 불러오기 실패", err);
            }
        };
        fetch();
    }, []);

    const calculatePosition = (date) => {
        const start = new Date(`${now.getFullYear()}-${String(currentMonth).padStart(2, "0")}-01`);
        const target = new Date(date);
        const diff = (target - start) / (1000 * 60 * 60 * 24);
        return Math.max(0, (diff / 60) * 100);
    };

    const calculateWidth = (startDate, endDate) => {
        const s = new Date(startDate), e = new Date(endDate);
        const diff = (e - s) / (1000 * 60 * 60 * 24) + 1;
        return Math.min(100, Math.max(10, (diff / 60) * 100));
    };

    return (
        <>
            <FilterRow>
                <TagSelector>
                    {["창의융합 역량", "공동체 역량", "글로벌 역량"].map(tag => (
                        <Tag
                            key={tag}
                            isActive={activeFilter === tag}
                            onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
                        >
                            {tag}
                        </Tag>
                    ))}
                </TagSelector>
            </FilterRow>
            <RoadMapContent
                currentMonth={currentMonth}
                nextMonth={nextMonthState}
                programs={programs}
                calculatePosition={calculatePosition}
                calculateWidth={calculateWidth}
                activeFilter={activeFilter}
                onProgramClick={(p) => {
                    setSelectedProgram(p);
                    setIsModalOpen(true);
                }}
            />
            {isModalOpen && selectedProgram && (
                <ProgramsModal
                    programId={selectedProgram.program_id}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
};

export default RoadMap;


const RoadMapWrapper = styled.div`
    padding: 30px 0;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 20px 0;
    }

    @media (max-width: 480px) {
        padding: 15px 0;
    }
`;

const MonthsContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    position: relative;
    padding: 0 40px;

    @media (max-width: 768px) {
        padding: 0 20px;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        padding: 0 15px;
        margin-bottom: 15px;
    }
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

    @media (max-width: 768px) {
        font-size: 24px;
        padding-bottom: 8px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        padding-bottom: 6px;
    }
`;

const MonthUnderline = styled.div`
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #2e65f3;
`;

const TimelineContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 800px;
    padding: 20px 40px;
    background: #f8f9fe;
    border-radius: 12px;
    box-sizing: border-box;
    overflow: visible;

    @media (max-width: 1024px) {
        min-height: 700px;
        padding: 20px 30px;
    }

    @media (max-width: 768px) {
        padding: 16px;
        min-height: 600px;
    }

    @media (max-width: 480px) {
        padding: 12px;
        min-height: 500px;
        border-radius: 8px;
    }
`;

const BaseDivider = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    z-index: 1;
    height: 100%;

    @media (max-width: 480px) {
        width: 2px;
    }
`;

const MonthDivider = styled(BaseDivider)`
    left: 50%;
    background: #e8e8e8;
`;

const MidMonthDivider = styled(BaseDivider)`
    background: #e8e8e8;
    border: none;
    width: 3px;

    @media (max-width: 480px) {
        width: 2px;
    }
`;

const DashedDivider = styled(BaseDivider)`
    border-left: 3px dashed #e8e8e8;
    background: transparent;

    @media (max-width: 480px) {
        border-left-width: 2px;
    }
`;

const ProgramBlock = styled.div`
    position: absolute;
    background: linear-gradient(
        102deg,
        rgba(46, 101, 243, 0.2) 0%,
        rgba(23, 52, 240, 0.2) 100%
    );
    border-radius: 25px;
    padding: 20px;
    height: 65px;
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

    @media (max-width: 1024px) {
        padding: 16px;
        height: 60px;
        border-radius: 20px;
    }

    @media (max-width: 768px) {
        padding: 12px;
        height: 55px;
        border-radius: 16px;
        margin: 0 6px;
    }

    @media (max-width: 480px) {
        padding: 10px;
        height: 50px;
        border-radius: 12px;
        margin: 0 4px;
    }
`;

const ProgramText = styled.div`
    color: #685860;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    letter-spacing: -0.50px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;

    @media (max-width: 1024px) {
        font-size: 18px;
        line-height: 22px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        line-height: 18px;
    }
`;

const FilterRow = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
`;

const TagSelector = styled.div`
    display: flex;
    gap: 12px;
    margin-left: 1060px;
    margin-top: -80px;

    @media (max-width: 1440px) {
        margin-left: auto;
        margin-right: 40px;
    }

    @media (max-width: 1024px) {
        margin-right: 30px;
        gap: 10px;
    }

    @media (max-width: 768px) {
        margin: 0;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 0;
    }
`;

const Tag = styled.div`
    cursor: pointer;
    font-size: 24px;
    color: ${({ isActive }) => (isActive ? "#2E65F3" : "#666")};
    font-weight: ${({ isActive }) => (isActive ? "700" : "400")};
    border-bottom: ${({ isActive }) => (isActive ? "2px solid #2E65F3" : "none")};
    padding: 4px 8px;

    &:hover {
        color: #2e65f3;
    }

    @media (max-width: 1024px) {
        font-size: 20px;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        padding: 3px 6px;
    }
`;