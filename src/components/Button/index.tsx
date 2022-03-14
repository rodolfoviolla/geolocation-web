import { ButtonProps } from "./interface";
import { ButtonStyle } from "./styles";

export function Button({ iconName, text, disabled, onClick }: ButtonProps) {
  const handleClick = () => {
    !disabled && onClick?.();
  }

  return (
    <ButtonStyle iconName={iconName} disabled={disabled} onClick={handleClick} >
      {text}
    </ButtonStyle>
  );
}