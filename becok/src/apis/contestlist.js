import axios from "axios";
const BASE_URL = "http://3.36.162.164:8080"; // 실제 서버 주소로 교체

export const getRecommendedContests = async (memberId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/recommend/list/${memberId}`);
        return response.data;
    } catch (error) {
        console.error("추천 공모전 조회 실패:", error);
        throw error;
    }
};
