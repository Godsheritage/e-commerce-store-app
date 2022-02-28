import React from "react";
import { textType } from "./types";

const Button: React.FC<textType> = ({ text}) => {
  return <button className="btn btn-primary btn-sm">{text}</button>;
};

export default Button;
