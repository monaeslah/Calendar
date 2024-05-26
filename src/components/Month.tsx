import React from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  getDay,
} from "date-fns";
import Day from "./Day";

import { SelectedDay } from "../interfaces";

interface FillAllMonthProps {
  month: Date;
  selectedDay: SelectedDay;
  selectDate: (date: Date) => void;
  hoveredDate: string;
  setHoveredDate: (date: string) => void;
  setSelectedDay: (dates: SelectedDay) => void;
  nameOfMonth: any;
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
}

const FillAllMonth: React.FC<FillAllMonthProps> = ({
  month,
  selectedDay,
  selectDate,
  hoveredDate,
  setHoveredDate,
  setSelectedDay,
  nameOfMonth,
  setCurrentMonth,
  currentMonth,
}) => {
  const generateCalendarDays = (month: Date) => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    const days = eachDayOfInterval({ start, end });

    const leadingDays = Array(getDay(start)).fill(null);
    return [...leadingDays, ...days];
  };

  const calendarDays = generateCalendarDays(month);
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const previousMonth = () => setCurrentMonth(addMonths(currentMonth, -1));

  return (
    <div className="month-grid">
      <div className="button-container">

      <button onClick={previousMonth}>&lt;</button>
      <div className="month-name"> {nameOfMonth}</div>
      <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendarMonth">
        {calendarDays.map((date, index) => (
          <div key={index} className="dayInThisMonth">
            {date ? (
              <Day
                disable={false}
                date={format(date, "yyyy-MM-dd")}
                selectedDate={
                  selectedDay.startDate
                    ? format(selectedDay.startDate, "yyyy-MM-dd")
                    : ""
                }
                selectedDate2={
                  selectedDay.endDate
                    ? format(selectedDay.endDate, "yyyy-MM-dd")
                    : ""
                }
                hoveredDate={hoveredDate}
                min={"2024-06-01"}
                max={"2024-12-31"}
                setHoverDate={setHoveredDate}
                setSelectedDate={(date) =>
                  setSelectedDay({ ...selectedDay, startDate: new Date(date) })
                }
                setSelectedDate2={(date) =>
                  setSelectedDay({ ...selectedDay, endDate: new Date(date) })
                }
                activeInput={1}
                selectDate={selectDate}
              />
            ) : (
              <div className="dayInThisMonth" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FillAllMonth;
