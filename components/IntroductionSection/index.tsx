import React from 'react';
import { ProfilePicture } from '../../assets';

import { Container, TextContainer } from './styles';

const IntroductionSection: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <h1>
          Hey, <b>I&apos;m Samuel</b>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut itaque
          ipsa esse veritatis reprehenderit voluptatum recusandae rem fugit
          nisi. Deserunt doloribus expedita harum nemo corporis dolore dolorum
          voluptatibus minus!
        </p>
      </TextContainer>
      <img src={ProfilePicture.src} alt="profile picture" />
    </Container>
  );
};

export default IntroductionSection;
