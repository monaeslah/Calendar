import axios from "axios";

const API_KEY = process.env.REACT_APP_FLIGHT_API_KEY;
const BASE_URL = "https://api.example.com";

export const fetchFlights = async (params: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/flights`, {
      params: {
        ...params,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};
