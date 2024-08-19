import React, { useState } from "react";
import DatePicker from "../Datepicker/index";
import CountrySelector from "../travelPicker/CountrySelector";
import PassengerCounter from "../passengars";
import Button from "../testComp/Button";
import fetchPlanes from "../flightSelectionForm/fetchPlanes";

const LandingPage = () => {
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [departureCity, setDepartureCity] = useState<string>("");
  const [arrivalCity, setArrivalCity] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [flights, setFlights] = useState<any[]>([]);

  const handlePassengerChange = (newAdults: number, newChildren: number) => {
    setAdults(newAdults);
    setChildren(newChildren);
  };

  const handleDatesChange = (startDate: string, endDate: string) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleSearch = async () => {
    if (adults === 0 && children > 0) {
      alert("At least one adult must be present if children are included.");
      return;
    }

    console.log("Searching flights with:", {
      adults,
      children,
      departureCity,
      arrivalCity,
      startDate,
      endDate,
    });

    // Here, we use startDate for simplicity, but you might want to modify your API call to handle endDate too
    const flightsData = await fetchPlanes(
      departureCity,
      arrivalCity,
      startDate
    );
    setFlights(flightsData);
  };

  return (
    <div className="landing">
      <div className="form-container">
        <CountrySelector
          onDepartureChange={(selectedCity) => setDepartureCity(selectedCity)}
          onArrivalChange={(selectedCity) => setArrivalCity(selectedCity)}
        />
        <DatePicker
          PopUp={false}
          autoClose={false}
          year={new Date().getFullYear()}
          month={new Date().getMonth()}
          onDatesChange={handleDatesChange} // Pass the handleDatesChange to DatePicker
        />
        <PassengerCounter onPassengerChange={handlePassengerChange} />
        <Button
          label="Search Flights"
          onClick={handleSearch}
          enable={true}
          className="search"
        />
      </div>
      <div className="flights-results">
        {flights.length > 0 ? (
          flights.map((flight, index) => (
            <div key={index}>
              <p>
                flight from{flight.estDepartureAirport} به{" "}
                {flight.estArrivalAirport}
              </p>
              <p>
                at: {new Date(flight.firstSeen * 1000).toLocaleTimeString()}
              </p>
            </div>
          ))
        ) : (
          <p>there is no flight</p>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
