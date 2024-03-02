import React from "react";
import "./ProductWidget.scss";
import "../../shared/globalStyles.scss";
import { GreenSparkSVGLogo } from "../../SVG/GreenSparkSVGLogo";
import { IProductWidgetProps } from "../../../src/shared/types";

const container = "product-widget-container";

export const ProductWidget = ({
  headingStyle,
  headingA,
  headingB,
}: IProductWidgetProps) => {
  return (
    <section className={`${container}`}>
      <div className={`${container}-header`} style={headingStyle}>
        <div className={`${container}-header-items`}>
          <GreenSparkSVGLogo />
          <div className={`${container}-header-items-heading`}>
            <h5>{headingA}</h5>
            <h3>{headingB}</h3>
          </div>
        </div>
      </div>
      <div className={`${container}-body`}>
        <div className={`${container}-body-item`}>item 1</div>
        <div className={`${container}-body-item`}>item 2</div>
        <div className={`${container}-body-item`}>item 3</div>
      </div>
    </section>
  );
};
