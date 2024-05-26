
import React from 'react';

const DaysOfWeek: React.FC = () => {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <div className="days-of-week">
      {days.map((day, index) => (
        <div key={index} className='dayHeader'>{day}</div>
      ))}
    </div>
  );
};

export default DaysOfWeek;