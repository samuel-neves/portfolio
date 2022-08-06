import styled from 'styled-components';
import { HeaderComponentProps } from './index';

export const Container = styled.div<HeaderComponentProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.scrolled ? '#00000066' : 'transparent')};
  transition: all 0.2s ease-out;
`;

export const HeaderButton = styled.button<HeaderComponentProps>`
  color: ${props => props.theme.color};
  margin: ${props => (props.scrolled ? '12px' : '36px')} 48px;
  padding: 0 12px;
  font-size: 20px;
  transition: all 0.2s ease-out;

  h1 {
    font-size: 20px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    color: ${props => props.theme.color};
  }

  &:hover {
    h1 {
      background: linear-gradient(
        90deg,
        #fff,
        ${props => props.theme.accentColor}
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 1px 1px 6px ${props => props.theme.accentColor};
    }

    div {
      opacity: 1;
      top: -4px;
    }
  }
`;

export const HeaderUnderLine = styled.div`
  background: linear-gradient(90deg, #fff, ${props => props.theme.accentColor});
  box-shadow: 1px 1px 6px ${props => props.theme.accentColor};
  height: 4px;
  border-radius: 4px;
  width: 100%;
  position: relative;
  top: -8px;
  opacity: 0;
  transition: all 0.2s ease-in-out, top 0.4s ease-in-out;
`;
