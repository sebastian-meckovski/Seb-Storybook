import React from "react";
import image from "../../public/info_outline.png";

export const InfoMark = ({ ...rest }) => {
  return (
    <>
      <img
        {...rest}
        tabIndex={0}
        src={image}
        alt="info mark"
        style={{
          margin: "auto auto 8px 2px",
          cursor: "pointer",
          height: "0.8rem",
          ...rest.style,
        }}
      />
    </>
  );
};
