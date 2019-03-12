import styled from "styled-components";
import Header from "./Header";
import Container from "./Container";

const StyledHomePage = styled.div`
  display: grid;
  grid-template-columns: repeat(21, 1fr);
  grid-template-rows: repeat(21, 1fr);
  height: 100%;
`;

const HomePage = () => (
  <StyledHomePage>
    <Header />
    <Container />
  </StyledHomePage>
);

export default HomePage;
