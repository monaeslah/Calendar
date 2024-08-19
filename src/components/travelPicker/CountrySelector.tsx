import React, { useState, useEffect } from "react";
import Select from "react-select";
import countries from "./countries.json";
import InputField from "../testComp/inputField";

interface Option {
  label: string;
  value: string;
}

interface CountrySelectorProps {
  onDepartureChange: (departureCity: string) => void; // برای مبدأ
  onArrivalChange: (arrivalCity: string) => void; // برای مقصد
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  onDepartureChange,
  onArrivalChange,
}) => {
  const [selectedDeparture, setSelectedDeparture] = useState<Option | null>(
    null
  );
  const [selectedArrival, setSelectedArrival] = useState<Option | null>(null);

  // داده‌ها برای `react-select`
  const options = countries.map((entry) => ({
    label: entry.country_city,
    value: entry.country_city,
  }));

  // هندلر برای تغییر مبدأ
  const handleDepartureChange = (option: Option | null) => {
    setSelectedDeparture(option);
    if (option) {
      onDepartureChange(option.value); // مبدأ به والد ارسال می‌شود
    }
  };

  // هندلر برای تغییر مقصد
  const handleArrivalChange = (option: Option | null) => {
    setSelectedArrival(option);
    if (option) {
      onArrivalChange(option.value); // مقصد به والد ارسال می‌شود
    }
  };

  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      width: "100%",
      fontSize: "12px",
      minHeight: "34px",
    }),
    control: (provided: any) => ({
      ...provided,
      width: "100%",
      fontSize: "12px",
      minHeight: "34px",
    }),
  };

  return (
    <div id="destination">
      <InputField
        label={""}
        iconBefore={""}
        className="inputField country_selection smallInput"
      >
        <Select
          options={options}
          value={selectedDeparture}
          onChange={handleDepartureChange}
          placeholder="Select Departure"
          styles={customStyles}
          classNamePrefix="react-select"
        />
      </InputField>

      <InputField
        label={""}
        iconBefore={""}
        className="inputField country_selection smallInput"
      >
        <Select
          options={options}
          value={selectedArrival}
          onChange={handleArrivalChange}
          placeholder="Select Return"
          styles={customStyles}
          classNamePrefix="react-select"
        />
      </InputField>
    </div>
  );
};

export default CountrySelector;
