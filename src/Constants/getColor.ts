import colorDark from "./colorDark";
import colorLight from "./colorLight";
import { IColors } from "./types";

const getColor = (theme: string, color: IColors, alana?: boolean) => {
  
  if(alana) {
    console.log('ALANAAA')
    console.log('theme', theme)
    console.log('color', color)

  }
  return theme === "dark" ? colorDark[color] : colorLight[color];
};

export default getColor;
