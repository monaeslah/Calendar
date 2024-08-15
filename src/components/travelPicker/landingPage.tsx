import * as React from "react";
import { Component } from "react";
import Input from "../testComp/inputField";

const LandingPage = () => {
  return (
    <Input
      type={""}
      label={""}
      value={""}
      onChange={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};
export default LandingPage;
