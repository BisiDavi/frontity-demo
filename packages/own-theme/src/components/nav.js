import { useState } from "react";

import { connect, styled } from "frontity";
import Images from "../assets/images";
import Link from "./link";
import Logo from "./logo";

function Nav({ state }) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu(value) {
    setShowMenu(value);
  }

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
    <>
      {showMenu && (
        <MobileMenu>
          <img onClick={() => toggleMenu(false)} src={Images.cancelIcon} />
          <span className="mobile-links">
            {state.theme.menu.map(([name, link]) => {
              return displaynavLinks(name, link);
            })}
          </span>
        </MobileMenu>
      )}
      <NavContainer>
        <Logo />
        <span className="menu-links">
          {state.theme.menu.map(([name, link]) => {
            return displaynavLinks(name, link);
          })}
        </span>
        <img
          onClick={() => toggleMenu(true)}
          className="mobile-menu"
          src={Images.menuIcon}
        />
      </NavContainer>
    </>
  );
}

export default connect(Nav);

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding:0px 100px;
  border-top: 1px solid black;

  & .mobile-menu{
    display:none;
  }

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

  @media (max-width:1300px){
    padding:0px 50px;
  }

  @media (max-width: 1000px) {
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
      margin: 0px 10px;
    }
  }

   @media (max-width: 700px) {
   
     & span.menu-links {
      display:none;
    }

    & img.mobile-menu {
      display:flex;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    position: absolute;
    align-items: center;
    height: 100vh;
    left: 0px;
    width: 100%;
    background-color: white;
    justify-content: center;
    background-image: url(${Images.mobileMenuBg});
    background-position: left;
    background-size: cover;

    & img {
      position: absolute;
      top: 30px;
      right: 30px;
    }

    & span.mobile-links {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 50%;
      text-align: center;
      font-weight: bold;
      font-size: 25px;
      font-family: "Poppins", sans-serif;
    }
  }
`;
