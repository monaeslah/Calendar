import React, { useState } from "react";
import { format, addDays } from "date-fns";

interface Props {
  PopUp: boolean;
  autoClose: boolean;
}
interface DateInputProps {
   label: string;
   value: string;
   onChange: (value: string) => void;
 }
 
 interface ButtonProps {
   label: string;
   onClick: () => void;
   disabled?: boolean;
 }
const DateInput: React.FC<DateInputProps> = ({ label, value, onChange }) => {
    return (
      <div className="input-wrapper">
        <label>{label}</label>
        <input type="date" value={value} onChange={e => onChange(e.target.value)} />
      </div>
    );
  };
  
 
  export default DateInput