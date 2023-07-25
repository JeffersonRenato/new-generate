import colorDark from "./colorDark";
import colorLight from "./colorLight";
import { IColors } from "./types";

const getColor = (theme: string, color: IColors) => {
  return theme === "dark" ? colorDark[color] : colorLight[color];
};

export default getColor;
