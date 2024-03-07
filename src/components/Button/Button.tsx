import React from "react";
import "./Button.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: JSX.Element | string;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};
