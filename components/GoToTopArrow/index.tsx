import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Container } from './styles';

interface GoToTopArrowComponentProps {
  setScrollYPosition: () => void;
  visible: boolean;
}

const GoToTopArrow: React.FC<GoToTopArrowComponentProps> = ({
  setScrollYPosition,
  visible,
}) => {
  return (
    <Container onClick={setScrollYPosition} visible={visible}>
      <ArrowUpwardIcon />
    </Container>
  );
};

export default GoToTopArrow;
