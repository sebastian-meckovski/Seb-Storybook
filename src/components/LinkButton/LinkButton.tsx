import React from "react";
import "./LinkButton.scss";

interface LinkButtonProps {
  children: JSX.Element | string;
}

export const LinkButton = ({ children, ...rest }: LinkButtonProps) => {
  return (
    <a className="link-button" {...rest}>
      {children}
    </a>
  );
};
