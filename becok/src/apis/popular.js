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

export const getContestById = async (contestsId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/contests/${contestsId}`);
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



export const getProgramById = async (programId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/programs/${programId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};