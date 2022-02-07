import React, { ReactNode } from "react";
import { FormButton } from "./style";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return <FormButton type={type}>{children}</FormButton>;
};

export { Button };
