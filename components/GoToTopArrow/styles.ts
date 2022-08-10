import styled from 'styled-components';

interface ButtonProps {
  visible: boolean;
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: ${props => props.theme.accentColor};
  position: fixed;
  bottom: 8vh;
  right: 4vw;
  transition: all 0.2s ease-in-out;
  visibility: ${props => (props.visible ? 'show' : 'hidden')};
  opacity: ${props => (props.visible ? '1' : '0')};

  path {
    color: ${props => props.theme.background};
  }

  &:hover {
    box-shadow: 0px 0px 8px 2px ${props => props.theme.accentColor};
  }
`;
