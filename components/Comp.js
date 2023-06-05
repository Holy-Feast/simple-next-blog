import { Box, Button } from '@mui/material';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 1rem;
`;

const MyComponent = () => {
  return (
    <StyledBox>
      <Button variant="contained" color="secondary">
        Material-UI with Styled Components
      </Button>
    </StyledBox>
  );
};

export default MyComponent;
