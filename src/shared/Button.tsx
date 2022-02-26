import React from "react";
import { textType } from "./types";

const Button: React.FC<textType> = ({ text, onClick }) => {
  return <button className="btn btn-primary">{text}</button>;
};

export default Button;
