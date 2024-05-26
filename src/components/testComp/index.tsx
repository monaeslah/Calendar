import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import DateInput from './dateInput'
import Button from './Button'

const DatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(addDays(new Date(), 10), 'yyyy-MM-dd'));

  const resetDates = () => {
    setStartDate(format(new Date(), 'yyyy-MM-dd'));
    setEndDate(format(addDays(new Date(), 10), 'yyyy-MM-dd'));
  };

  const isResetDisabled = startDate === format(new Date(), 'yyyy-MM-dd') && endDate === format(addDays(new Date(), 10), 'yyyy-MM-dd');

  return (
    <div className="date-picker">
      <DateInput label="Start Date:" value={startDate} onChange={setStartDate} />
      <DateInput label="End Date:" value={endDate} onChange={setEndDate} />
      <Button label="Reset" onClick={resetDates} disabled={isResetDisabled} />
      <Button label="Done" onClick={() => console.log(`Round trip: ${startDate} to ${endDate}`)} />
    </div>
  );
};

export default DatePicker;
