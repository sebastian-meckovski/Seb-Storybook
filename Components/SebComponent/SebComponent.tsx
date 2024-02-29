import React from "react";

interface SebProps {
  name: string
}

export const SebComponent: (props: SebProps) => JSX.Element = (props: SebProps) => {
  return <h1>my name a {props.name}</h1>;
};
