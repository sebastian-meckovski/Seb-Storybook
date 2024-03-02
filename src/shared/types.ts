export enum productWidgetColors {
  white = "#ffffff",
  black = "#000000",
  blue = "#2e3a8c",
  green = "#3B755F",
  beige = "#F2EBDB",
}

export type WidgetType = "carbon" | "plastic bottles" | "trees";

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
export interface IProductWidgetProps extends IProductWidget {
  headingA: string;
  headingB: string;
  headingStyle: {
    [key: string]: string;
  };
}
