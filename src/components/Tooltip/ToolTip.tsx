import React from "react";
import "./Tooltip.scss";

interface props {
  tootlipcontent: string;
  anchorContent: string;
  href: string;
  target: string;
}

export const ToolTip = ({
  tootlipcontent,
  anchorContent,
  href,
  target,
}: props) => {
  return (
    <div className="tooltip-container">
      <p>{tootlipcontent} </p>{" "}
      <a href={href} target={target}>
        {anchorContent}
      </a>
    </div>
  );
};