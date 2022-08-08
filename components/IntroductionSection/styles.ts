import styled, { keyframes } from 'styled-components';

const cubeAnimation = keyframes`
 0% { width: 180px; }
 50% { width: 160px; margin-left: -130px; }
 100% { width: 180px; }
`;

const orangeArrowAnimation = keyframes`
 0% { top: 50px; left: 600px; width: 140px; }
 50% { top: 30px; left: 580px; width: 160px; }
 100% { top: 50px; left: 600px; width: 140px; }
`;

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
    font-weight: unset;
  }

  span {
    color: ${props => props.theme.accentColor};
  }

  p {
    font-size: 24px;
    max-width: 600px;
  }

  #rounded-orange-cube {
    width: 180px;
    position: absolute;
    margin-left: -140px;
    opacity: 0.8;

    animation-name: ${cubeAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  #orange-arrow {
    position: relative;
    width: 140px;
    left: 600px;
    top: 50px;
    opacity: 0.8;

    animation-name: ${orangeArrowAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
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
    opacity: 0.8;
  }
`;
