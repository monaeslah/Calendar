import axios from "axios";

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
