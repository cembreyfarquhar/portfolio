import styled from "styled-components";
import { Element } from "react-scroll";

const StyledProfile = styled.div`
  width: 40%;
  display: flex;
  padding: 5%;
  flex-direction: column;
  align-items: flex-start;

  h2 {
      font-size: 3.4rem;
  }
  p {
      font-size: 1.6rem;
  }
`;

const Profile = () => (
  <Element name="profile">
    <StyledProfile>
      <h2>Unlocking Endless Potential...</h2>
      <p>
        Life is one huge emotional mind game. There are days we wake up with an
        empty heart wondering if we’re even going to make it. We get beaten to
        the ground over and over again, we get our hope torn from us, we scream
        at the top of our lungs to the sky hoping that the moon will fill the
        void that still remains.. But somehow through all the pain, through all
        the suffering.. These moments never compare to the seconds that take our
        breath away. The situations given to us that remind us of how beautiful
        life can be. Let go.. Detach yourself.. There’s too much beauty to quit.
        I live for moments like these… WE live for moments like these.
      </p>
    </StyledProfile>
  </Element>
);

export default Profile;