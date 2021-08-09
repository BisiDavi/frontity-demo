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
  margin-bottom: 20px;
`;
