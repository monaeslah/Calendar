import React, { useState } from "react";
import Select from "react-select";
import countries from "./countries.json";
import InputField from "../testComp/inputField";

interface Option {
  label: string;
  value: string;
}

interface CountrySelectorProps {}

const CountrySelector: React.FC<CountrySelectorProps> = () => {
  const [selectedDeparture, setSelectedDeparture] = useState<Option | null>(
    null
  );
  const [selectedReturn, setSelectedReturn] = useState<Option | null>(null);

  const options = countries.map((entry) => ({
    label: entry.country_city,
    value: entry.country_city,
  }));

  const handleDepartureChange = (option: Option | null) => {
    setSelectedDeparture(option);
  };

  const handleReturnChange = (option: Option | null) => {
    setSelectedReturn(option);
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
        className="inputField country_selection mediumInput"
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
        className="inputField country_selection mediumInput"
      >
        <Select
          options={options}
          value={selectedReturn}
          onChange={handleReturnChange}
          placeholder="Select Return"
          styles={customStyles}
          classNamePrefix="react-select"
        />
      </InputField>
    </div>
  );
};

export default CountrySelector;
