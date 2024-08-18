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
      if (autoClose) setIsOpen(false); // Auto-close after selecting end date
    } else if (startDate && endDate) {
      setSelectedDay({ startDate: date, endDate: null });
    } else {
      setSelectedDay({ startDate: date, endDate: null });
    }
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const startDate = new Date(e.target.value);
    setSelectedDay({ ...selectedDay, startDate });
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const endDate = new Date(e.target.value);
    setSelectedDay({ ...selectedDay, endDate });
  };

  const selectDates = () => {
    const { startDate, endDate } = selectedDay;
    console.log("Updated selectedDay:", startDate, endDate);
    setIsOpen(false);
  };

  return (
    <div className="date-picker">
      <div className="input-container">
        <label>
          Start Date:
          <button className="date-button" onClick={toggleCalendar}>
            {selectedDay.startDate
              ? format(selectedDay.startDate, "yyyy-MM-dd")
              : "select date"}
          </button>
        </label>
        <label>
          End Date:
          <button
            className="date-button"
            onClick={toggleCalendar}
            disabled={!selectedDay.startDate}
          >
            {selectedDay.endDate
              ? format(selectedDay.endDate, "yyyy-MM-dd")
              : "select date"}
          </button>
        </label>
      </div>

      {isOpen && (
        <div className="opened_calendar">
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
        </div>
      )}
    </div>
  );
};

export default Index;
