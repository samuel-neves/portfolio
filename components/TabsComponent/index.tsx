import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

import { TabPanelContainer } from './styles';

interface TabsComponent {
  tabTitle: string;
  TitleComponent: () => JSX.Element;
  ContentComponent: () => JSX.Element;
}

interface TabsComponentProps {
  tabsData: TabsComponent[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <TabPanelContainer
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </TabPanelContainer>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabsComponent: React.FC<TabsComponentProps> = ({ tabsData }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {tabsData.map(({ tabTitle }, index) => (
          <Tab label={tabTitle} {...a11yProps(index)} />
        ))}
      </Tabs>

      {tabsData.map(({ TitleComponent, ContentComponent }, index) => (
        <TabPanel value={value} index={index}>
          {TitleComponent()}
          {ContentComponent()}
        </TabPanel>
      ))}
    </>
  );
};

export default TabsComponent;
