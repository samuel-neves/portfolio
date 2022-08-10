import React from 'react';

import {
  html5Icon,
  css3Icon,
  javascriptIcon,
  typescriptIcon,
  reactIcon,
  nextjsIcon,
  reduxIcon,
  nodejsIcon,
  postgreesqlIcon,
  mongodbIcon,
  graphqlIcon,
  apolloIcon,
  cypressIcon,
  dockerIcon,
  materialUiIcon,
  sassIcon,
  tailwindcssIcon,
  gitIcon,
  visualStudioCodeIcon,
} from 'assets/icons';
import {
  Container,
  TextContainer,
  TechsSection,
  TechsContainer,
  TechsContent,
} from './styles';

const technologies = [
  {
    name: 'HTML & CSS',
    icons: [html5Icon.src, css3Icon.src],
  },
  {
    name: 'JAVASCRIPT / TYPESCRIPT',
    icons: [javascriptIcon.src, typescriptIcon.src],
  },
  {
    name: 'REACT',
    icons: [reactIcon.src],
  },
  {
    name: 'NEXTJS',
    icons: [nextjsIcon.src],
  },
  {
    name: 'REDUX',
    icons: [reduxIcon.src],
  },
  {
    name: 'NODEJS',
    icons: [nodejsIcon.src],
  },
  {
    name: 'POSTGREESQL',
    icons: [postgreesqlIcon.src],
  },
  {
    name: 'MONGODB',
    icons: [mongodbIcon.src],
  },
  {
    name: 'GRAPHQL',
    icons: [graphqlIcon.src],
  },
  {
    name: 'APOLLO',
    icons: [apolloIcon.src],
  },
  {
    name: 'CYPRESS',
    icons: [cypressIcon.src],
  },
  {
    name: 'DOCKER',
    icons: [dockerIcon.src],
  },
  {
    name: 'MATERIAL UI',
    icons: [materialUiIcon.src],
  },
  {
    name: 'SASS',
    icons: [sassIcon.src],
  },
  {
    name: 'TAILWIND CSS',
    icons: [tailwindcssIcon.src],
  },
  {
    name: 'GIT',
    icons: [gitIcon.src],
  },
  {
    name: 'VISUAL STUDIO CODE',
    icons: [visualStudioCodeIcon.src],
  },
];

const AboutSection: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          cupiditate minima ratione illo natus rem dolorum sed sequi et,
          adipisci maiores, dicta quas maxime beatae perferendis ab nesciunt
          ullam. Sed?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          cupiditate minima ratione illo natus rem dolorum sed sequi et,
          adipisci maiores, dicta quas maxime beatae perferendis ab nesciunt
          ullam. Sed?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          cupiditate minima ratione illo natus rem dolorum sed sequi et,
          adipisci maiores, dicta quas maxime beatae perferendis ab nesciunt
          ullam. Sed?
        </p>
      </TextContainer>
      <TechsSection>
        <h1>Techs I have worked with:</h1>
        <TechsContainer>
          {technologies.map(({ name, icons }) => (
            <TechsContent>
              <p>{name}</p>{' '}
              {icons.map(icon => (
                <img src={icon} alt="icon image" key={icon} />
              ))}
            </TechsContent>
          ))}
        </TechsContainer>
      </TechsSection>
    </Container>
  );
};

export default AboutSection;
