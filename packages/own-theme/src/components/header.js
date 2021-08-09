import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

function Header({ state }) {
  return (
    <Container>
      
      <Nav />
    </Container>
  );
}

export default connect(Header);

const Container = styled.header`
  width: 100%;
  background-color: white;
  height: 100px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;


