import * as React from "react";
import InputField from "../testComp/inputField";
import DatePicker from "../Datepicker/index";
import CountrySelector from "../travelPicker/CountrySelector";
import PassengerCounter from "../passengars";
import Button from "../testComp/Button";
import { useState } from "react";
import fetchPlanes from "../flightSelectionForm/fetchPlanes";

const LandingPage = () => {
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
    }
  };

  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);

  const [departureCity, setDepartureCity] = useState<string>("");
  const [arrivalCity, setArrivalCity] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [flights, setFlights] = useState<any[]>([]);
  const handlePassengerChange = (newAdults: number, newChildren: number) => {
    setAdults(newAdults);
    setChildren(newChildren);
  };

  const handleSearch = async () => {
    if (adults === 0 && children > 0) {
      alert("At least one adult must be present if children are included.");
      return;
    }
    // Proceed with search or booking logic
    console.log("Searching flights with:", {
      adults,
      children,
      departureCity,
      arrivalCity,
      date,
    });
    const flightsData = await fetchPlanes(departureCity, arrivalCity, date);
    setFlights(flightsData);
  };

  return (
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
      />
      <PassengerCounter onPassengerChange={handlePassengerChange} />
      <Button label="Search Flights" onClick={handleSearch} enable={true} />

      <div className="flights-results">
        {flights.length > 0 ? (
          flights.map((flight, index) => (
            <div key={index}>
              <p>
                پرواز از {flight.estDepartureAirport} به{" "}
                {flight.estArrivalAirport}
              </p>
              <p>
                ساعت: {new Date(flight.firstSeen * 1000).toLocaleTimeString()}
              </p>
            </div>
          ))
        ) : (
          <p>پروازی یافت نشد</p>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
