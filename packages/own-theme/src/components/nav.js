import { connect, styled } from "frontity";
import Link from "./link";
import Logo from "./logo";

function Nav({ state }) {
  return (
    <NavContainer>
      <Logo />
      {state.theme.menu.map(([name, link]) => {
        const isCurrentPage = state.router.link === link;
        return (
          <NavItem key={name}>
            <Link
              link={link}
              aria-current={isCurrentPage ? "page" : "undefined"}
            >
              {name}
            </Link>
          </NavItem>
        );
      })}
      <ContactLink>
        <p>CALL US NOW</p>
        <h4>0701 293 8242</h4>
      </ContactLink>
    </NavContainer>
  );
}

export default connect(Nav);

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavLink = styled.div`
    margin: 0 24px,
    color:black;
    font-size: 1em;

    & > a{
        display:flex;
        line-height:2em;
        font-weight:500;
        
        &[aria-current="page]{
            color: red;
        }
    }
`;

const ContactLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;

  & > h4 {
    font-weight: bold;
    margin: 2px 0px;
  }
`;
