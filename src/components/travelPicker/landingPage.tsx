import * as React from "react";
import InputField from "../testComp/inputField";
import DatePicker from "../Datepicker/index";
import CountrySelector from "../travelPicker/CountrySelector";
import PassengerCounter from "../passengars";
import Button from "../testComp/Button";
import { useState } from "react";
const LandingPage = () => {
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
    }
  };
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);

  const handlePassengerChange = (newAdults: number, newChildren: number) => {
    setAdults(newAdults);
    setChildren(newChildren);
  };

  const handleSearch = () => {
    if (adults === 0 && children > 0) {
      alert("At least one adult must be present if children are included.");
      return;
    }
    // Proceed with search or booking logic
    console.log("Searching flights with:", { adults, children });
  };

  return (
    <div className="landing">
      <CountrySelector />
      <DatePicker
        PopUp={false}
        autoClose={false}
        year={new Date().getFullYear()}
        month={new Date().getMonth()}
      />
      <PassengerCounter onPassengerChange={handlePassengerChange} />
      <Button label="Search Flights" onClick={handleSearch} enable={true} />
    </div>
  );
};
export default LandingPage;
