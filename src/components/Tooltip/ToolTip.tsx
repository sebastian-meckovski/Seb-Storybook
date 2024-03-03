import React from "react";
import "./Tooltip.scss";

interface props extends React.HTMLProps<HTMLDivElement> {
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
  ...rest
}: props) => {
  return (
    <div className="tooltip-container" {...rest}>
      <div className="tooltip">
        <p>{tootlipcontent} </p>{" "}
        <a href={href} target={target}>
          {anchorContent}
        </a>
      </div>
    </div>
  );
};
