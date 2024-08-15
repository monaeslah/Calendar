import React from "react";
import DatePicker from "./components/index";
import "./App.css";
import Other from "./components/testComp";
import LandingPage from "./components/travelPicker/landingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <DatePicker
        PopUp={false}
        autoClose={false}
        year={new Date().getFullYear()}
        month={new Date().getMonth()}
      />
    </div>
  );
}

export default App;
