import { TabsComponent } from 'components';
import React from 'react';

import { Container } from './styles';

const tabsData = [
  {
    tabTitle: 'título 1',
    TitleComponent: () => <div>Componente de título 1</div>,
    ContentComponent: () => <div>Componente de conteúdo 1</div>,
  },
  {
    tabTitle: 'título 2',
    TitleComponent: () => <div>Componente de título 2</div>,
    ContentComponent: () => <div>Componente de conteúdo 2</div>,
  },
  {
    tabTitle: 'título 3',
    TitleComponent: () => <div>Componente de título 3</div>,
    ContentComponent: () => <div>Componente de conteúdo 3</div>,
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <Container>
      <TabsComponent tabsData={tabsData} />
    </Container>
  );
};

export default ExperienceSection;
