import React from 'react';
import { SmallTubeSlice, GreenArrowAsset } from 'assets';

import { Container } from './styles';

const TripleImageComponent: React.FC = () => {
  return (
    <Container>
      <img src={SmallTubeSlice.src} alt="small purple tube" id="smaller-tube" />
      <img src={GreenArrowAsset.src} alt="green arrow" id="green-arrow" />
      <img src={SmallTubeSlice.src} alt="big purple tube" id="bigger-tube" />
    </Container>
  );
};

export default TripleImageComponent;
