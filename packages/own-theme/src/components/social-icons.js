import { connect, styled } from "frontity";

import telephone from "../assets/telephone.png";
import Link from "./link";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

function SocialIcons({ state, header }) {
  function displayIcon(icon) {
    switch (icon) {
      case "facebook":
        return <img src={facebook} alt="facebook" />;
      case "twitter": {
        return <img src={twitter} alt="twitter" />;
      }
      case "instagram": {
        return <img src={instagram} alt="instagram" />;
      }
    }
  }
  return (
    <SocialLinks>
      {header && <span className="contact-link">
        <img src={telephone} alt="telephone" height="30px" width="30px" />
        <h4>0701 293 8242</h4>
      </span>}
      <div className="links">
        {state.theme.SocialLinks.links.map((link, index) => (
          <Link className="social-link" link={link.link} key={index}>
            {displayIcon(link.name)}
          </Link>
        ))}
      </div>
    </SocialLinks>
  );
}

export default connect(SocialIcons);

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin: 0px;
  padding: 0px 100px;

  & .contact-link {
    display: flex;
    align-items: center;
  }

  & .contact-link > img {
    margin: 0px 15px;
  }

  & .social-link {
    text-decoration: none;
    margin: 10px 20px;
  }

  & .links {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1000px) {
    padding: 0px;

    & img {
      height: 20px;
      width: 20px;
    }
  }
`;
