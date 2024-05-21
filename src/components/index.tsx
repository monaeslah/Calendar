import React, { useState } from "react";
import { format, addDays } from "date-fns";
import InputDate from "./selectInput"
interface Props {
  PopUp: boolean;
  autoClose: boolean;
}

const Index = ({ autoClose, PopUp }: Props) => {
  const now = new Date();
  const formattedToday = format(now, "yyyy-MM-dd");
  const tenDaysFromNow = format(addDays(now, 10), "yyyy-MM-dd");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleStartDateChange = (newValue: string) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: string) => {
    setEndDate(newValue);
  };

  const resetDates = () => {
    // setDates({ startDate: formattedToday, endDate: tenDaysFromNow });
    setIsOpen(false);
  };
  const submitDates = () => {
    // console.log(`Round trip: ${dates.startDate} to ${dates.endDate}`);
    setIsOpen(false);
  };
  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  // const isResetDisabled =
    // dates.startDate === formattedToday && dates.endDate === tenDaysFromNow;

  return (
    <div className="date-picker">
      {isOpen ? (
      <InputDate label={"test"} value={"new"}  onChange={handleStartDateChange} />
      ) : (
        <button onClick={toggleCalendar} className="open-calendar">
          {"Select Dates"}
        </button>
      )}
    </div>
  );
};
export default Index;

// import React, { useState } from 'react';
// import { format } from 'date-fns';

// const CustomDatePicker: React.FC = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setStartDate(new Date(event.target.value));
//   };

//   const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEndDate(new Date(event.target.value));
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="start-date">Start Date:</label>
//         <input
//           type="date"
//           id="start-date"
//           value={format(startDate, 'yyyy-MM-dd')}
//           onChange={handleStartDateChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="end-date">End Date:</label>
//         <input
//           type="date"
//           id="end-date"
//           value={format(endDate, 'yyyy-MM-dd')}
//           onChange={handleEndDateChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default CustomDatePicker;
{
  /* <div className="calendar-modal">

<div className="date-display">
  <input
    type="date"
    // value={dates.startDate}
    onChange={handleDateChange}
  />
  <input
    type="date"
    // value={dates.endDate}
    onChange={ handleDateChange}
  />
</div>
<button onClick={resetDates} className="reset" disabled={isResetDisabled}>
  Reset
</button>
<button onClick={submitDates} className="submit">
      Done
    </button>
    </div> */
}
