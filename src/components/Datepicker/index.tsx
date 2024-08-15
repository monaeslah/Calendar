import React, { useState } from "react";
import { format, addMonths } from "date-fns";
import DaysOfWeek from "./DayofWeek";
import FillAllMonth from "./Month";
import { SelectedDay } from "../utilities/interface";
import TimeControler from "../timeControler";

interface Props {
  PopUp: boolean;
  autoClose: boolean;
  year: number;
  month: number;
}

const Index = ({ autoClose, PopUp, year, month }: Props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(year, month));
  const [selectedDay, setSelectedDay] = useState<SelectedDay>({
    startDate: null,
    endDate: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredDate, setHoveredDate] = useState("");

  const toggleCalendar = () => setIsOpen(!isOpen);

  const selectDate = (date: Date) => {
    const { startDate, endDate } = selectedDay;
    if (startDate && !endDate && date > startDate) {
      setSelectedDay({ startDate, endDate: date });
    } else if (startDate && endDate) {
      setSelectedDay({ startDate: date, endDate: null });
    } else {
      setSelectedDay({ startDate: date, endDate: null });
    }
  };
  const selectDates = () => {
    const { startDate, endDate } = selectedDay;

    console.log("Updated selectedDay:", startDate, endDate);

    setIsOpen(false);
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

              <div>
                <DaysOfWeek />

                <FillAllMonth
                  month={addMonths(currentMonth, 1)}
                  nameOfMonth={format(addMonths(currentMonth, 1), "MMMM ")}
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
          <TimeControler />
          <div className="button-container">
            <button className="button cancel" onClick={toggleCalendar}>
              CANCEL
            </button>
            <button className="button add" onClick={selectDates}>
              ADD
            </button>
          </div>
        </>
      ) : (
        <button onClick={toggleCalendar}>Select Date</button>
      )}
    </div>
  );
};

export default Index;
