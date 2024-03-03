import React from "react";
import "./Tooltip.scss";

interface props {
  tootlipcontent: string;
  anchorContent: string;
  href: string;
  target: string;
  tooltipAnchorRef: React.RefObject<any>;
  handleTooltipAnchorBlur?: (e: any) => void;
  handleTooltipAnchorKeyPress?: (e: any) => void;
}

export const ToolTip = ({
  tootlipcontent,
  anchorContent,
  href,
  target,
  tooltipAnchorRef,
  handleTooltipAnchorBlur,
  handleTooltipAnchorKeyPress,
}: props) => {
  return (
    <div className="tooltip">
      <p>{tootlipcontent} </p>
      <a
        href={href}
        target={target}
        ref={tooltipAnchorRef}
        onBlur={handleTooltipAnchorBlur}
        onKeyDown={handleTooltipAnchorKeyPress}
      >
        {anchorContent}
      </a>
    </div>
  );
};
