import React from "react";
import { InputFields } from "../utilities/interface";
const Input = (props: InputFields) => (
  <div className="input-group">
    <label>{props.label}</label>
    <input type={props.type} value={props.value} onChange={props.onChange} />
  </div>
);

export default Input;
