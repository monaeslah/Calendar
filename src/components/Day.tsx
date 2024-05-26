import React, { useState } from 'react';
import { DayProps } from '../interfaces';

const Day: React.FC<DayProps> = ({
  disable,
  date,
  selectedDate,
  selectedDate2,
  min,
  max,
  setHoverDate,
  setSelectedDate,
  setSelectedDate2,
  activeInput,
  selectDate,
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
    setHoverDate(date);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setHoverDate('');
  };

  const handleClick = () => {
    if (activeInput === 1) {
      if (!selectedDate2 || date < selectedDate2) {
        setSelectedDate(date);
      } else {
        setSelectedDate(selectedDate2);
        setSelectedDate2(date);
      }
    } else if (activeInput === 2 && selectedDate) {
      if (date > selectedDate) {
        setSelectedDate2(date);
      } else {
        setSelectedDate(date);
      }
    }
    selectDate(new Date(date)); 
  };

  const renderDayContent = (date: string) => {
    return date[8] === '0' ? date.slice(9, 10) : date.slice(8, 10);
  };

  const isBetweenSelected = date > selectedDate && date < selectedDate2;
  const isSelected = date === selectedDate || date === selectedDate2;
 

  return (
    <div
      className={`dayInThisMonth${isSelected ? ' selected' : ''}${isBetweenSelected ? ' between-selected' : ''}${isHover ? ' hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      
    >
      {renderDayContent(date)}
    </div>
  );
};

export default Day;
