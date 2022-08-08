import React from 'react';
import { ProfilePicture, CubeMissingTopLeftPart } from 'assets';

import { Container, TextContainer, ProfilePictureContainer } from './styles';
import { TripleImageComponent } from './components';

const IntroductionSection: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <TripleImageComponent />
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
      <ProfilePictureContainer>
        <img
          src={ProfilePicture.src}
          alt="profile picture"
          id="profile-picture"
        />
        <img
          src={CubeMissingTopLeftPart.src}
          alt="decorative cube missing top part"
          id="cube-image"
        />
      </ProfilePictureContainer>
    </Container>
  );
};

export default IntroductionSection;
