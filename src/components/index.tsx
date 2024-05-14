import React, { useState } from "react";
interface Props {
  PopUp: boolean;
  autoClose: boolean;
}
const Index = ({ autoClose, PopUp }: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (event: {
    target: { value: string | number | Date };
  }) => {
    const newDate = new Date(event.target.value);
    setStartDate(newDate);
  };

  const handleEndDateChange = (event: {
    target: { value: string | number | Date };
  }) => {
    const newDate = new Date(event.target.value);
    setEndDate(newDate);
  };

  const resetDates = () => {
    setStartDate(new Date());
    setEndDate(new Date());
  };

  return (
    <div className="date-picker">
      <div className="date-display">
        <input
          type="date"
          value={startDate.toISOString().substring(0, 10)}
          onChange={handleStartDateChange}
        />
        <input
          type="date"
          value={endDate.toISOString().substring(0, 10)}
          onChange={handleEndDateChange}
        />
      </div>
      <button onClick={resetDates}>Reset</button>
      <button
        onClick={() => console.log(`Round trip: ${startDate} to ${endDate}`)}
      >
        Done
      </button>
    </div>
  );
};

export default Index;
