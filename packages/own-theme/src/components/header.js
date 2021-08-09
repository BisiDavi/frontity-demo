import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

function Header({ state }) {
  return (
    <Container>
      <SocialLinks>
        {state.theme.SocialLinks.links.map((link, index) => (
          <SocialLink link={link.link} key={index}>
            {link.name}
          </SocialLink>
        ))}
      </SocialLinks>
      <Nav />
    </Container>
  );
}

export default connect(Header);

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 100px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid black;
  height: 50px;
  margin: 0px;
`;

const SocialLink = styled(Link)`
  text-decoration: none;
  margin: 10px 20px;
`;
