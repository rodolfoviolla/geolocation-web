import { shade } from "polished";
import styled, { css } from "styled-components";

import { themeColorsByIconName } from "../../pages/Home/styles";
import { ButtonStyleProps } from "./interface";

export const ButtonStyle = styled.div<ButtonStyleProps>`
  border-radius: 1rem;
  border: 2px solid ${({ iconName }) => themeColorsByIconName[iconName].light};
  
  height: 2rem;
  width: 75%;
  margin: 1rem 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.25rem;
  padding-top: 0.1rem;

  cursor: pointer;

  transition: background-color 0.2s;

  ${({ disabled, iconName }) =>
    disabled 
    ? css`
      background: ${shade(0.3, themeColorsByIconName[iconName].light)};
      cursor: default;
    `
    : css`
      &:hover {
        background: ${shade(0.1, themeColorsByIconName[iconName].light)};
      }
    `
  }
`;