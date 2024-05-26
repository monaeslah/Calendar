import React, { useState } from "react";
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  addDays,
  parse,
} from "date-fns";
import Day from "./Day";
import DaysOfWeek from "./DayofWeek";
interface Props {
  PopUp: boolean;
  autoClose: boolean;
  year: number; // YYYY
  month: number; // MM (1-12)
}

const Index = ({ autoClose, PopUp ,year,month}: Props) => {
  const [currentDay,setCurrentDay]=useState(Date())
  const [showPopUp,setShowPopUp]=useState(PopUp===undefined?true:false)
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<{ startDate: Date | null; endDate: Date | null }>({
    startDate: null,
    endDate: null
  });
  const [isOpen, setIsOpen] = useState(true);
const[hoveredDate,setHoveredDate]=useState('')
const[activeInput,setActiveInput]=useState(0)
  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 2)); // move two months forward
  };

  const previousMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -2)); // move two months back
  };

  const selectDate = (date: Date) => {
    const { startDate, endDate } = selectedDates;
    if (!startDate || (startDate && endDate)) {
      setSelectedDates({ startDate: date, endDate: null });
    } else if (startDate && !endDate) {
      setSelectedDates({ startDate, endDate: date });
    }
  };

  const generateCalendarDays = (month: Date) => {
    const startOfFirstMonth = startOfMonth(month);
    const endOfSecondMonth = endOfMonth(addMonths(month, 1));
    return eachDayOfInterval({ start: startOfFirstMonth, end: endOfSecondMonth });
  };

  const isDateSelected = (date: Date) => {
    const { startDate, endDate } = selectedDates;
    return (startDate && isSameDay(date, startDate)) || (endDate && isSameDay(date, endDate));
  };

  const calendarDays = generateCalendarDays(currentMonth);

  const startDate = startOfMonth(new Date(year, month - 1));


  // const daysInMonth = new Date(year, month, 0).getDate();
  const daysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
}
const getFullFirstOfDate = (today: string) => {
  const date = new Date(today);
  const firstOfMonth = startOfMonth(date);
  return format(firstOfMonth, 'yyyy-MM-dd EEEE MMMM');
};
const getNameOfDate = (date: Date) => {
  return format(date, 'EEEE'); // This will return the full name of the day (e.g., 'Monday')
};
const date = new Date();
console.log("today is",getNameOfDate(date)); 
const fillAllMonth = (firstOfMonth: Date) => {
  const start = startOfMonth(firstOfMonth);
  const end = endOfMonth(start);
  return eachDayOfInterval({ start, end })
    .map((date) => {
      const formattedDate = format(date, 'yyyy-MM-dd');
      return (
        <Day
          key={formattedDate}
          setHoverDate={(hoveredDate: string) => setHoveredDate(hoveredDate)}
          setSelectedDate={(date: string) => setSelectedDates({ ...selectedDates, startDate: new Date(date) })}
          setSelectedDate2={(date: string) => setSelectedDates({ ...selectedDates, endDate: new Date(date) })}
          hoveredDate={hoveredDate}
          selectedDate={selectedDates.startDate ? format(selectedDates.startDate, 'yyyy-MM-dd') : ''}
          selectedDate2={selectedDates.endDate ? format(selectedDates.endDate, 'yyyy-MM-dd') : ''}
          date={formattedDate}
          activeInput={activeInput}
          min={""}
          max={""}
          disable={false} />
      );
    });
}
const getNameOfLastDayInMonth = (date: string) => {
  const [YYYY, MM] = date.split('-');
  const firstDayOfMonth = parse(`${YYYY}-${MM}-01`, 'yyyy-MM-dd', new Date());
  const lastDayOfMonth = endOfMonth(firstDayOfMonth);
  return format(lastDayOfMonth, 'EEEE');
}
 // Generate array of days in the month formatted as 'YYYY-MM-DD'
 const daysArray = [...Array(daysInMonth(year, month))].map((_, dayIndex) => {
  const day = addDays(startDate, dayIndex);
  return format(day, 'yyyy-MM-dd');
});


return (
  <div className="date-picker">
    {isOpen ? (
      <>
        <button onClick={previousMonth}>Previous</button>
        <button onClick={nextMonth}>Next</button>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          className="calendarContainer"
        >
          <DaysOfWeek />
        {daysArray.map((formattedDate, index) => {
            const [DATE] = formattedDate.split('-');
            return (
              <div key={index}>
                <Day
                  disable={false}
                  date={DATE}
                  selectedDate={selectedDates.startDate ? format(selectedDates.startDate, 'yyyy-MM-dd') : ''}
                  selectedDate2={selectedDates.endDate?format(selectedDates.endDate, 'yyyy-MM-dd') : ''}
                  hoveredDate={hoveredDate}
                  min={'2024-06-01'}
                  max={'2024-12-31'}
                
                  setHoverDate={(date: string) => setHoveredDate(date)}
                  setSelectedDate={(date: string) => setSelectedDates({ ...selectedDates, startDate: new Date(date) })}
                  setSelectedDate2={(date: string) => setSelectedDates({ ...selectedDates, endDate: new Date(date) })}
            
     
   
   
     

  
      activeInput={1}
                
                
                
                />{index}
              </div>
            );
          })}
          {calendarDays.map((day, index) => (
            <button
              key={index}
              onClick={() => selectDate(day)}
              style={{
                width: "40px",
                height: "40px",
                margin: "5px",
                backgroundColor: isDateSelected(day) ? "lightblue" : "green",
              }}
            >
              {format(day, "dd")}
            </button>
          ))}
        </div>
      </>
    ) : (
      <button onClick={toggleCalendar}>Select Date</button>
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
