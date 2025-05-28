import axios from "axios";

const BASE_URL = "http://3.36.162.164:8080";

export const postBookmark = async (memberId, type, contentId) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/bookmark/${memberId}`, {
      type,
      contentId,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const postNotification = async (memberId, type, contentId) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/notification/${memberId}`,
      {
        type,
        contentId,
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getStorageItems = async (memberId, view) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/remember`,
      {
        params: {
          member: memberId,
          view,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

