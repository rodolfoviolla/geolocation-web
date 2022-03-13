import styled from 'styled-components';

import { PropsWithIconNameType } from './interface';
import { themeColorsByIconName } from './props';

export const Container = styled.div<PropsWithIconNameType>`
  background: ${({ iconName }) => themeColorsByIconName[iconName].background};
  color: ${({ iconName }) => themeColorsByIconName[iconName].dark};
  
  max-width: 300px;
  margin: 1rem;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 1rem;
`;

export const Header = styled.div<PropsWithIconNameType>`
  color: ${({ iconName }) => themeColorsByIconName[iconName].light};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderHour = styled.div``;

export const HeaderDate = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.img``;

export const Temperature = styled.div`
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

export const Description = styled.div`
  font-weight: 500;
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid;
  margin: 1.5rem 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Address = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
`;

export const City = styled.div``;

export const Country = styled.div``;
