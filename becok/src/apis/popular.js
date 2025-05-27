import axios from "axios";

const BASE_URL = "http://3.36.162.164:8080";

export const getPopularContests = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/contests/popular`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getContestById = async (contestsId, memberId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/contests/${contestsId}`, {
      params: { memberId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const getPopularPrograms = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/programs/popular`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const getProgramById = async (programId, memberId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/programs/${programId}`, {
      params: { memberId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};