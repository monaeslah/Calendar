import React, { useState } from "react";
import classNames from "classnames";
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large" | "xlarge";
  enable?: boolean;
  className?: string;
}
const Button = (props: ButtonProps) => {
  const buttonClasses = classNames(
    "mainCTA",
    {
      buttonS: props.size === "small",
      buttonM: props.size === "medium",
      buttonL: props.size === "large",
      buttonXL: props.size === "xlarge",
    },
    props.className
  );
  return (
    <div
      className={`${buttonClasses} ${
        props.enable ? "pointer" : "not_allowed "
      }`}
      onClick={props.enable ? props.onClick : undefined}
    >
      <span className="innerButton">{props.label}</span>
    </div>
  );
};
export default Button;
