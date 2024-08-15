import React, { useState } from "react";
import InputField from "../testComp/inputField";

const Index = () => {
  return (
    <div className="date-picker">
      <h1>You will choose your travel detials here</h1>
      <InputField
        label={"enter your dates"}
        type={"text"}
        value={"12"}
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default Index;
