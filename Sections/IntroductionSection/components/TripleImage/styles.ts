import styled, { keyframes } from 'styled-components';

const smallerTubeAnimation = keyframes`
 0% { top: 0px; }
 50% { top: -20px; }
 100% { top: 0px; }
`;

const greenArrowAnimation = keyframes`
 0% { top: 65px; }
 50% { top: 45px; }
 100% { top: 65px; }
`;

const biggerTubeAnimation = keyframes`
 0% { top: 120px; }
 50% { top: 100px; }
 100% { top: 120px; }
`;

export const Container = styled.div`
  position: absolute;
  margin-top: -140px;
  margin-left: -140px;
  opacity: 0.8;

  #smaller-tube {
    width: 90px;
    position: relative;

    animation-name: ${smallerTubeAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  #green-arrow {
    width: 100px;
    position: relative;
    left: -30px;
    top: 65px;

    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-name: ${greenArrowAnimation};
    animation-duration: 2.2s;
    animation-iteration-count: infinite;
  }

  #bigger-tube {
    width: 110px;
    position: relative;
    left: -100px;
    top: 120px;
    transition: all 0.1s;

    animation-name: ${biggerTubeAnimation};
    animation-duration: 2.4s;
    animation-iteration-count: infinite;
  }
`;
