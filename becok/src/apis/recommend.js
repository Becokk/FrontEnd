import axios from "axios";

const BASE_URL = "http://3.36.162.164:8080";

export const postUserRecommendation = async (memberId, recommendData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/recommend/${memberId}`,
      recommendData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

