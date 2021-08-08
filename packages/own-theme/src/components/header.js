import { connect, styled } from "frontity";
import Nav from "./nav";

function Header({ state }) {
  return (
    <Container>
      <SocialLinks>
        {state.themes.SocialLinks.links.map((link, index) => (
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
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const List = styled.li`
  margin: 5px 10px;
  list-style: none;
`;

const SocialLink = styled(Link)`
  text-decoration: none;
`;
