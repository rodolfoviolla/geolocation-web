import { colors, linearGradient } from "../../styles/colors";

const { black, darkBlue, darkGray, darkWhite, lightBlue, lightGray, lightWhite } = colors;

export const themeColorsByIconName = {
  '01d': { background: linearGradient(lightBlue, darkBlue), light: lightWhite, dark: darkGray },
  '01n': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '02d': { background: linearGradient(lightBlue, darkBlue), light: lightWhite, dark: darkGray },
  '02n': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '03d': { background: linearGradient(lightBlue, darkBlue), light: lightWhite, dark: darkGray },
  '03n': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '04d': { background: linearGradient(lightBlue, darkBlue), light: lightWhite, dark: darkGray },
  '04n': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '09d': { background: linearGradient(lightBlue, darkBlue), light: lightWhite, dark: darkGray },
  '09n': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '10d': { background: linearGradient(lightBlue, darkBlue), light: lightWhite, dark: darkGray },
  '10n': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '11d': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '11n': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '13d': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '13n': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '50d': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
  '50n': { background: linearGradient(lightGray, black), dark: darkWhite, light: black },
};