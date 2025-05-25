import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const signup = async (signupData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/signup`, signupData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const login = async (loginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/login`, loginData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
