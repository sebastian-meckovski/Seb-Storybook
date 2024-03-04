import React from "react";
import "./ProductWidget.scss";
import "../../shared/globalStyles.scss";
import { GreenSparkSVGLogo } from "../../SVG/GreenSparkSVGLogo";
import { InfoMark } from "../../SVG/InfoMarkSVG";
import { IProductWidgetProps, WidgetTypeDict } from "../../../src/shared/types";
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
  linked,
  active,
  availableColors,
  handleOnMouseEnter,
  handleCheckboxClick,
  handleSwitchClick,
  handleColorClick,
  handleInfoMarkFocus,
  handleInfoMarkBlur,
}: IProductWidgetProps) => {
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
          <div className={`${container}-body-item`}>
            <p>Link to Public Profile</p>
            <InfoMark
              onFocus={handleInfoMarkFocus}
              onBlur={handleInfoMarkBlur}
              onMouseEnter={handleOnMouseEnter}
            />
          </div>
          <Checkbox
            title={`${amount} ${type} - Link to Public Profile`}
            id={`checkbox-${id}`}
            checked={linked}
            onChange={(e) => {
              handleCheckboxClick(e);
            }}
          />
        </div>
        <div className={`${container}-body-item`}>
          <p> Badge colour</p>
          <div>
            {availableColors.map((x) => {
              return (
                <ColorRadioButton
                  checked={x == selectedColor}
                  onChange={(e) => handleColorClick(e, x)}
                  key={x}
                  name={`radio-group-${id}`}
                  style={{ backgroundColor: x.slice(0, 7) }}
                />
              );
            })}
          </div>
        </div>
        <div className={`${container}-body-item`}>
          <p>Activate badge</p>
          <Switch
            title={`${amount} ${type} - Activate badge`}
            checked={active}
            onChange={handleSwitchClick}
            id={`switch-${id}`}
          />
        </div>
      </div>
    </section>
  );
};
