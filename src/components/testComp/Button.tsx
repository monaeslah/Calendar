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
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
export default Button
