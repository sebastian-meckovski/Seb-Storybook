import React from "react";
import "./ContentCard.scss";

interface props {
  children: JSX.Element;
}

export const ContentCard = ({ children, ...rest }: props) => {
  return <article className="ContentCard" {...rest}>{children}</article>;
};
