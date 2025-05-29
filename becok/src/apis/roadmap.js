import axios from "axios";

const BASE_URL = "http://3.36.162.164:8080";

export const GetRecommendRoadMap = async (memberId) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/api/recommend/roadmap/${memberId}`
        );
        return response.data;
    } catch (error) {
        console.error("추천 로드맵 조회 실패: ", error);
        throw error;
    }
};
