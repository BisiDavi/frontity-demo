import { styled } from "frontity";
import SocialIcons from "./social-icons";
import Nav from "./nav";

function Header() {
  return (
    <Container>
      <SocialIcons />
      <Nav />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  background-color: white;
  height: 100px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  position: sticky;
  top: 0px;
  box-shadow: -20px 0px 1px 1px #adadb7;
  z-index: 100;
`;
