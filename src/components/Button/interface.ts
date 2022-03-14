import { PropsWithIconNameType } from "../../pages/Home/interface";
import { IconNameType } from "../../services/openWeatherApi/interface";

export type ButtonStyleProps = PropsWithIconNameType & {
  disabled?: boolean;
}

export type ButtonProps = {
  iconName: IconNameType;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}