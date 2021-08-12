import { connect, styled } from "frontity";
import Link from "./link";
import Logo from "./logo";

function Nav({ state }) {
  function displaynavLinks(name, link, visibility) {
    const isCurrentPage = state.router.link === link;
    return (
      <div className="nav-item" style={{ display: visibility }} key={name}>
        <Link link={link} aria-current={isCurrentPage ? "page" : "undefined"}>
          {name}
        </Link>
      </div>
    );
  }

  return (
    <NavContainer>
      <Logo />
      <span className="menu-links">
        {state.theme.menu.map(([name, link]) => {
          return displaynavLinks(name, link);
        })}
      </span>
    </NavContainer>
  );
}

export default connect(Nav);

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding:0px 100px;
  border-top: 1px solid black;

  & .nav-item {
    margin: 0 24px,
    color:black;
    font-size: 1em;
  }

  & span.menu-links {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  & span.menu-links > div{  
      margin: 0px 30px;
  }

  & .nav-item  > a {
      display:flex;
      line-height:2em;
      font-weight:500;
  }
    
  &[aria-current="page"]{
      color: red;
  }
  
  & .contact-link {
  display: flex;
  align-items: center;
  height: 50px;
  }
  
  & .contact-link > span > h4 {
    font-weight: bold;
    font-size: 20px;
    margin-top: 5px;
  }

  & .contact-link > span > p {
    margin-bottom: 0px;
    font-size: 16px;
  }

  & .contact-link > span {
    margin: 0px 10px;
  }

  @media (max-width: 900px) {
    padding:0px 10px;

    &  a{
      font-size: 14px;
    }
    
    & > span > h4 {
      font-size: 16px;
    }
    & > span > p {
      font-size: 14px;
    }
     & span.menu-links > div {
      margin: 0px 20px;
    }
  }
`;
