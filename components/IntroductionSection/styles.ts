import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 180px;

  img {
    margin-left: auto;
    height: 500px;
  }
`;

export const TextContainer = styled.div`
  h1 {
    font-size: 60px;
  }

  b {
    color: ${props => props.theme.accentColor};
  }

  p {
    font-size: 24px;
    max-width: 600px;
  }
`;
