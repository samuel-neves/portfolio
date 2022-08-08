import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 180px;
`;

export const TextContainer = styled.div`
  h1 {
    font-size: 60px;
    position: relative;
    z-index: 4;
  }

  b {
    color: ${props => props.theme.accentColor};
  }

  p {
    font-size: 24px;
    max-width: 600px;
  }
`;

export const ProfilePictureContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  #profile-picture {
    height: 500px;
    position: relative;
    z-index: 1;
  }

  #cube-image {
    margin: 235px 0px 0px 20px;
    width: 286px;
    position: absolute;
  }
`;
