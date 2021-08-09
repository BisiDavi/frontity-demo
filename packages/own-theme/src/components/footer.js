import { connect, styled } from "frontity";
import colors from "../styles/colors";
import helpIcon from "../assets/helpIcon.png";
import upArrowIcon from "../assets/upArrow.png";
import Logo from "./logo";

function Footer({ state, bg = colors.gray }) {
  return (
    <Container>
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
          <ul>
            <li>
              <img src={} alt="telephone" />
              (701) 293-8242
            </li>
            <li>
              <img src={} alt="telephone" />
              (701) 293-8242
            </li>
            <li>
              <img src={} alt="address" />
              4344 20th Ave S Fargo, ND 58103
            </li>
            <li>
              <img src={} alt="email" />
              info@baganstrindenvision.com
            </li>
          </ul>
          <hr />          
          <ul>
            <Link href="">CLINICAL TRIALS</Link>
            <Link href="">CONSTACT LENS </Link>
            <Link href="">PROVIDER PORTAL</Link>
            <Link href="">BLOG</Link>
            <Link href="">CONTACT</Link>
            <Link href="">PRIVACY POLICY</Link>
          </ul>
          <hr />          
        </FooterGroup>
      </MainSection>
    </Container>
  );
}

export default connect(Footer);

const Container = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${bg};
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 20px;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

