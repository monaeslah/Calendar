import React, { useState } from "react";
import { format, addMonths} from "date-fns";
import DaysOfWeek from "./DayofWeek";
import FillAllMonth from "./Month";
import { SelectedDay } from "../interfaces";

interface Props {
  PopUp: boolean;
  autoClose: boolean;
  year: number;
  month: number;
}

const Index = ({ autoClose, PopUp, year, month }: Props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(year, month ));
  const [selectedDay, setSelectedDay] = useState<SelectedDay>({ startDate: null, endDate: null });
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredDate, setHoveredDate] = useState("");

  const toggleCalendar = () => setIsOpen(!isOpen);



  const selectDate = (date: Date) => {
    const { startDate, endDate } = selectedDay;
    setSelectedDay(startDate && !endDate ? { startDate, endDate: date } : { startDate: date, endDate: null });
  };


  return (
    <div className="date-picker">
      {isOpen ? (
        <>
          <div className="header">
            
            <div className="year-title">{format(currentMonth, " yyyy")}</div>
           
          </div>
          <div className="calendarContainer">
            <div className="one-month">
            <div className="first-month">
         
              <DaysOfWeek />
           
              <FillAllMonth
              nameOfMonth={format(currentMonth, "MMMM ")}
                month={currentMonth}
                selectedDay={selectedDay}
                selectDate={selectDate}
                hoveredDate={hoveredDate}
                setHoveredDate={setHoveredDate}
                setSelectedDay={setSelectedDay}
                currentMonth={currentMonth}
                setCurrentMonth={setCurrentMonth}
              />
          
            </div>
          
            <div >
              <DaysOfWeek />
            
              <FillAllMonth
                month={addMonths(currentMonth, 1)}
                nameOfMonth=  {format(addMonths(currentMonth, 1), "MMMM ")}
                selectedDay={selectedDay}
                selectDate={selectDate}
                hoveredDate={hoveredDate}
                setHoveredDate={setHoveredDate}
                setSelectedDay={setSelectedDay}
                currentMonth={currentMonth}
                setCurrentMonth={setCurrentMonth}
              />
            </div>
            </div>
        
          </div>
          <div className="time-inputs">
            <div className="time-input">
              <label>Time:</label>
              <input type="checkbox" />
            </div>
            <div className="time-input">
              <label>Hour:</label>
              <input type="number" min="1" max="12" defaultValue="12" />
            </div>
            <div className="time-input">
              <label>Min:</label>
              <input type="number" min="0" max="59" defaultValue="00" />
            </div>
            <div className="time-input">
              <label>AM/PM:</label>
              <select>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
          <div className="button-container">
            <button className="button cancel">CANCEL</button>
            <button className="button add">ADD</button>
          </div>
        
          
        </>
      ) : (
        <button onClick={toggleCalendar}>Select Date</button>
      )}
    </div>
  );
};

export default Index;
