import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 140px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const TextContainer = styled.div`
  p {
    font-size: 20px;
    max-width: 600px;
  }

  p + p {
    margin-top: 20px;
  }
`;

export const TechsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    font-size: 52px;
    line-height: 58px;
    font-weight: lighter;
    color: ${props => props.theme.accentColor};
    text-align: right;
  }
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 8px;
  width: 500px;
  max-height: 360px;
  overflow-y: scroll;
`;

export const TechsContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 0;

  p {
    font-size: 24px;
    line-height: 24px;
    margin-right: auto;
  }

  img {
    height: 24px;
    margin-right: 4px;
  }
`;
