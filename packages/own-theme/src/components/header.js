import { styled } from "frontity";
import SocialIcons from "./social-icons";
import Nav from "./nav";

function Header() {
  return (
    <Container id="header">
      <SocialIcons header />
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
  position: sticky;
  top: 0px;
  box-shadow: -20px 0px 1px 1px #adadb7;
  z-index: 100;
  margin-bottom: 0px;
`;
