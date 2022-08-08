import React from 'react';
import {
  ProfilePicture,
  CubeMissingTopLeftPart,
  RoundedCube,
  OrangeArrowAsset,
} from 'assets';

import { Container, TextContainer, ProfilePictureContainer } from './styles';
import { TripleImageComponent } from './components';

const IntroductionSection: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <TripleImageComponent />
        <h1>
          Hey, <span>I&apos;m Samuel</span>
        </h1>
        <p>
          Born in 2001, I&apos;m from Mato Grosso, Brazil. My love for
          technology started when I was a child and started playing computer
          games in my dad&apos;s computer. I&apos;ve been studying programming
          since I was 14 and web development since 2020! The love of my life is
          Marcela Fidelis, and i want to have 10 kids or more with her!
        </p>
        <img
          src={RoundedCube.src}
          alt="Rounded orange cube"
          id="rounded-orange-cube"
        />
        <img src={OrangeArrowAsset.src} alt="Orange arrow" id="orange-arrow" />
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
