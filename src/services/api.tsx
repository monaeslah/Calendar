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

const fetchPlanes = async (
  departureCity: string,
  arrivalCity: string,
  date: string
) => {
  try {
    const response = await axios.get(
      "https://opensky-network.org/api/flights/all",
      {
        params: {
          airport: departureCity,
          begin: new Date(date).getTime() / 1000, // تبدیل تاریخ به تایم‌استمپ
          end: new Date(date).getTime() / 1000 + 86400, // پایان روز
        },
      }
    );

    // فقط پروازهایی که مقصدشان arrivalCity است را فیلتر می‌کنیم
    const flights = response.data.filter(
      (flight: any) => flight.estArrivalAirport === arrivalCity
    );

    return flights;
  } catch (error) {
    console.error("Error fetching flights:", error);
    return [];
  }
};

export default fetchPlanes;
