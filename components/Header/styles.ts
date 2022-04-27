import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButton = styled.button`
  color: ${props => props.theme.color};
  margin: 12px 48px;
  padding: 0 12px;
  font-size: 20px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    color: ${props => props.theme.color};
  }

  &:hover {
    h1 {
      color: ${props => props.theme.accentColor};
      text-shadow: 2px 1px 3px ${props => props.theme.accentColor};
    }
  }
`;
