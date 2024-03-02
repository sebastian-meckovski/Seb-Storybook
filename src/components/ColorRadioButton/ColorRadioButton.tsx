import React from "react";
import "./ColorRadioButton.scss";

interface props extends React.HTMLProps<HTMLInputElement> {}

export const ColorRadioButton = ({ style, ...rest }: props) => {
  return (
    <>
      <label className="color-radio-button-container" style={style}>
        <input type="radio" {...rest} className="color-radio-button" />
        <label className="color-radio-checkmark" />
      </label>
    </>
  );
};
