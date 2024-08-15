import * as React from "react";
import InputField from "../testComp/inputField";
import DatePicker from "../Datepicker/index";
import CountrySelector from "../travelPicker/CountrySelector";
const LandingPage = () => {
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
    }
  };
  return (
    <div>
      <InputField
        label={"user name"}
        iconBefore={""}
        className="inputField smallInput"
      >
        <input
          type="text"
          value={""}
          placeholder={"email"}
          onKeyDown={handleKeyDown}
          onChange={(e) => e}
        />
      </InputField>
      <DatePicker
        PopUp={false}
        autoClose={false}
        year={new Date().getFullYear()}
        month={new Date().getMonth()}
      />
      <CountrySelector />
    </div>
  );
};
export default LandingPage;
