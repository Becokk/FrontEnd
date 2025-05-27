import axios from "axios";

const BASE_URL = "http://3.36.162.164:8080";

export const postUserGoal = async (memberId, goalData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/goal/${memberId}`,
      goalData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postUserProfile = async (memberId, profileData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/profile/${memberId}`,
      profileData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
