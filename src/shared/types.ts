export enum productWidgetColors {
  blue = "#2e3a8c#ffffff",
  green = "#3B755F#ffffff",
  beige = "#F2EBDB#3B755F",
  white = "#ffffff#3B755F",
  black = "#000000#ffffff",
}

export type WidgetType = "carbon" | "plastic bottles" | "trees";

export const WidgetTypeDict = {
  carbon: "kg of carbon",
  "plastic bottles": " plastic bottles",
  trees: " trees",
};

export type productWidgetActions = "collects" | "plants" | "offsets";

export interface IProductWidget {
  id: number;
  type: WidgetType;
  action: productWidgetActions;
  amount: number;
  active: boolean;
  linked: boolean;
  selectedColor: productWidgetColors;
}
export interface IProductWidgetProps extends IProductWidget {}
