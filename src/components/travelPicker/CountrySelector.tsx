import React, { useState } from "react";
import Select from "react-select";
import countries from "./countries.json";

interface Option {
  label: string;
  value: string;
}

interface CountrySelectorProps {}

const CountrySelector: React.FC<CountrySelectorProps> = () => {
  const [selectedCountryCity, setSelectedCountryCity] = useState<Option | null>(
    null
  );

  const options = countries.map((entry) => ({
    label: entry.country_city,
    value: entry.country_city,
  }));

  const handleCountryCityChange = (option: Option | null) => {
    setSelectedCountryCity(option);
  };

  return (
    <div>
      <h2>Select a Country and City</h2>
      <Select
        options={options}
        value={selectedCountryCity}
        onChange={handleCountryCityChange}
        placeholder="Select Country and City"
      />
      {selectedCountryCity && (
        <div>
          <h3>You selected:</h3>
          <p>{selectedCountryCity.label}</p>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
