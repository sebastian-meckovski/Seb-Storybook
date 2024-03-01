import React from "react";
import './seb-style.css'
import './seb-sass.scss'

interface SebProps {
  name: string
}

export const SebComponent: (props: SebProps) => JSX.Element = (props: SebProps) => {
  return <h1 className="seb-test">my name a {props.name}</h1>;
};
