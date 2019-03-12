import styled from "styled-components";
import { Link } from "react-scroll";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background: #DDDDDD;
  border-radius: 15px 15px 0 0;
  a {
    font-size: 2.4rem;
  }
`;

const NavBar = () => (
  <StyledNav>
    <Link
      to="profile"
      smooth={true}
      activeClass="active"
      className="profile"
      spy={true}
      duration={500}
    >
      Profile
    </Link>{" "}
    <Link
      to="projects"
      smooth={true}
      activeClass="active"
      className="projects"
      spy={true}
      duration={500}
    >
      Projects
    </Link>{" "}
    <Link
      to="social"
      smooth={true}
      activeClass="active"
      className="social"
      spy={true}
      duration={500}
    >
      Social
    </Link>{" "}
    <Link
      to="contact"
      smooth={true}
      activeClass="active"
      className="contact"
      spy={true}
      duration={500}
    >
      Contact
    </Link>
  </StyledNav>
);

export default NavBar;
