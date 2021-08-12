import { connect, styled } from "frontity";
import colors from "../styles/colors";
import telIcon from "../assets/tel.png";
import mapIcon from "../assets/map.png";
import mailIcon from "../assets/mail.png";
import Logo from "./logo";
import SocialIcons from "./social-icons";
import Link from "./link";

function Footer({ state, bg = colors.gray }) {
  return (
    <Container style={{ backgroundColor: bg }}>
      <div className="main-section">
        <span className="logo">
          <Logo />
        </span>
        <div className="footer-group">
          <ul className="contact">
            <li>
              <img src={telIcon} alt="telephone" />
              (701) 293-8242
            </li>
            <li>
              <img src={mapIcon} alt="address" />
              4344 20th Ave S Fargo, ND 58103
            </li>
            <li>
              <img src={mailIcon} alt="email" />
              info@baganstrindenvision.com
            </li>
          </ul>
          <hr />
          <ul className="footer-links">
            {state.theme.footerLinks.map((footerLink, index) => (
              <Link key={index} link={footerLink.link}>
                {footerLink.name}
              </Link>
            ))}
          </ul>
          <hr />
          <SocialIcons className="socialIcons" />
        </div>
        <p>All rights reserved</p>
      </div>
    </Container>
  );
}

export default connect(Footer);

const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;

  & ul {
    padding: 0px;
  }

  & hr {
    margin: 0px;
  }

  & .main-section {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  & .main-section > p {
    text-align: center;
  }

  & .footer-group {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items: center;
  }

  & .footer-group > hr {
    height: 120px;
  }

  & .contact {
    padding: 0px;
  }

  & .contact > li {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 20px 0px;
  }

  & .contact > li > img {
    margin: 0px 20px;
  }

  & .footer-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 500px;
  }
  & .footer-links > li {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 10px 20px;
  }

  & .footer-links > a {
    margin: 5px;
  }

  @media (max-width: 1000px) {
    & .footer-links > a {
      font-size: 15px;
    }
    & .footer-links {
      width: unset;
    }
  }

  @media (max-width: 800px) {
    & .main-section {
      width: 100%;
    }
    & .footer-links > li,
    & .contact > li {
      margin: 10px 0px;
    }
    & .footer-links > a {
      margin: 0px 10px;
      font-size: 15px;
    }

    & .footer-links {
      width: unset;
    }
    & .logo {
      margin-left: 30px;
    }

    & .contact > li > img {
      height: 20px;
      width: 20px;
    }
  }
`;
