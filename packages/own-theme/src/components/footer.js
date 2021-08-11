import { connect, styled } from "frontity";
import colors from "../styles/colors";
import telIcon from "../assets/tel.png";
import mapIcon from "../assets/map.png";
import mailIcon from "../assets/mail.png";
import helpIcon from "../assets/helpIcon.png";
import upArrowIcon from "../assets/upArrow.png";
import Logo from "./logo";
import SocialIcons from "./social-icons";
import Link from "./link";

function Footer({ state, bg = colors.gray }) {
  return (
    <Container style={{ backgroundColor: bg }}>
      <TopSection>
        <span>
          <h5>Help</h5>
          <img src={helpIcon} alt="help" />
        </span>
        <span>
          <h5>Up To Top</h5>
          <img src={upArrowIcon} alt="go up" />
        </span>
      </TopSection>
      <MainSection>
        <Logo />
        <FooterGroup>
          <Contact>
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
          </Contact>
          <hr />
          <FooterLinks>
            {state.theme.footerLinks.map((footerLink, index) => (
              <Link key={index} link={footerLink.link}>
                {footerLink.name}
              </Link>
            ))}
          </FooterLinks>
          <hr />
          <SocialIcons />
        </FooterGroup>
        <p>All rights reserved</p>
      </MainSection>
    </Container>
  );
}

export default connect(Footer);

const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;

  & hr {
    margin: 0px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  width: 100%;
  & span {
    display: flex;
    align-items: center;
    margin: 0px 70px;
  }
  & span > h5 {
    margin: 20px;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  & p {
    text-align: center;
  }
`;

const FooterGroup = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: center;

  & hr {
    height: 120px;
  }
`;

const Contact = styled.ul`
  padding: 0px;

  & li {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 20px 0px;
  }

  & li > img {
    margin: 0px 20px;
  }
`;

const FooterLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 500px;

  & li {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 10px 20px;
  }

  & a {
    margin: 5px;
  }
`;
