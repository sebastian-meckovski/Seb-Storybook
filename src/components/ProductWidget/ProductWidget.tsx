import React from "react";
import "./ProductWidget.scss";
import "../../shared/globalStyles.scss";
import { GreenSparkSVGLogo } from "../../SVG/GreenSparkSVGLogo";
import {
  IProductWidgetProps,
  WidgetTypeDict,
  productWidgetColors,
} from "../../../src/shared/types";
import { Checkbox } from "../Checkbox/Checkbox";
import { ColorRadioButton } from "../ColorRadioButton/ColorRadioButton";
import { Switch } from "../Switch/Swtich";

const container = "product-widget-container";

export const ProductWidget = ({
  id,
  selectedColor,
  action,
  amount,
  type,
}: IProductWidgetProps) => {
  const colors = Object.values(productWidgetColors);
  return (
    <section className={`${container}`}>
      <div
        className={`${container}-header`}
        style={{
          backgroundColor: selectedColor.slice(0, 7),
          color: selectedColor.slice(7, 15),
        }}
      >
        <div className={`${container}-header-items`}>
          <GreenSparkSVGLogo />
          <div className={`${container}-header-items-heading`}>
            <h5>This product {action}</h5>
            <h3>
              {amount}
              {WidgetTypeDict[type]}
            </h3>
          </div>
        </div>
      </div>
      <div className={`${container}-body`}>
        <div className={`${container}-body-item`}>
          <p>Link to Public Profile</p>
          <Checkbox />
        </div>
        <div className={`${container}-body-item`}>
          <p> Badge colour</p>
          <div>
            {colors.map((x) => {
              return (
                <ColorRadioButton
                  name={`radio-group-${id}`}
                  style={{ backgroundColor: x.slice(0, 7) }}
                  // checked={selectedColor == x}
                />
              );
            })}
          </div>
        </div>
        <div className={`${container}-body-item`}>
          <p>Activate badge</p> <Switch />
        </div>
      </div>
    </section>
  );
};
