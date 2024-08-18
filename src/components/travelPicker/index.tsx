import React, { useState } from "react";
import InputField from "../testComp/inputField";

const Index = () => {
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
    }
  };
  return (
    <div className="date-picker">
      <h1>You will choose your travel detials here</h1>
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
          className="smallInput"
        />
      </InputField>
    </div>
  );
};

export default Index;
