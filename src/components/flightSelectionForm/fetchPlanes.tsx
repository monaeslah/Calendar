import axios, { AxiosError } from "axios";

const fetchPlanes = async (
  departureCity: string,
  arrivalCity: string,
  pickedDate: string // Assuming the date picker returns a string like "2024-10-10"
) => {
  try {
    // Convert picked date to Date object
    const date = new Date(pickedDate);

    // Calculate the beginning of the time window (e.g., 00:00:00)
    const begin = date.getTime() / 1000;

    // Set the end time to two hours after the start time
    const end = begin + 7200; // 7200 seconds = 2 hours

    // Prepare the options object for the axios request
    const options = {
      method: "GET",
      url: "https://opensky-network.org/api/flights/all",
      params: {
        airport: departureCity,
        begin: begin, // Use the calculated begin timestamp
        end: end, // Use the calculated end timestamp
      },
      headers: {
        "x-rapidapi-key": "your-rapidapi-key", // Replace with your actual RapidAPI key
        "x-rapidapi-host": "sky-scrapper.p.rapidapi.com", // Update this to match the actual host if necessary
      },
    };

    // Make the API request using axios
    const response = await axios.request(options);

    // Filter flights by arrival city
    const flights = response.data.filter(
      (flight: any) => flight.estArrivalAirport === arrivalCity
    );

    return flights;
  } catch (error) {
    // Narrow down the type of 'error'
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error fetching planes:",
        error.response?.data || error.message
      );
    } else {
      console.error(
        "Unexpected error fetching planes:",
        (error as Error).message
      );
    }
    return [];
  }
};

export default fetchPlanes;
