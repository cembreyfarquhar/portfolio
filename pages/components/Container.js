import styled from "styled-components";
import NavBar from './NavBar';
import Profile from './Profile';
import Projects from './Projects';

const StyledContainer = styled.div`
  background-color: white;
  grid-column: 4 / 19;
  grid-row: 9 / 21;
  border-radius: 15px;
`;

const Container = () => (
  <StyledContainer>
      <NavBar />
      <Profile />
      <Projects />
  </StyledContainer>
);

export default Container;
