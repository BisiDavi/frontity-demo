import { connect, styled } from "frontity";
import Link from "./link";
import telephone from "../assets/telephone.png";
import Logo from "./logo";

function Nav({ state }) {
  function displaynavLinks(name, link, visibility) {
    const isCurrentPage = state.router.link === link;
    return (
      <NavItem style={{ display: visibility }} key={name}>
        <Link link={link} aria-current={isCurrentPage ? "page" : "undefined"}>
          {name}
        </Link>
      </NavItem>
    );
  }

  return (
    <NavContainer>
      <Logo />
      {state.theme.menu.map(([name, link]) => {
        return displaynavLinks(name, link);
      })}
      <ContactLink>
        <img src={telephone} alt="telephone" height="30px" width="30px" />
        <span>
          {" "}
          <p>CALL US NOW</p>
          <h4>0701 293 8242</h4>
        </span>
      </ContactLink>
    </NavContainer>
  );
}

export default connect(Nav);

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid black;
`;

const NavItem = styled.div`
    margin: 0 24px,
    color:black;
    font-size: 1em;

    & > a{
        display:flex;
        line-height:2em;
        font-weight:500;
        
        &[aria-current="page"]{
            color: red;
        }
    }
`;

const ContactLink = styled.div`
  display: flex;
  align-items: center;
  height: 50px;

  & > span > h4 {
    font-weight: bold;
    font-size: 20px;
    margin-top: 5px;
  }

  & > span > p {
    margin-bottom: 0px;
    font-size: 16px;
  }

  & > span {
    margin: 0px 10px;
  }
`;
