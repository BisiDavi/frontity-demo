import { connect, styled } from "frontity";

import Link from "./link";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

function SocialIcons({ state }) {
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
      {state.theme.SocialLinks.links.map((link, index) => (
        <SocialLink link={link.link} key={index}>
          {displayIcon(link.name)}
        </SocialLink>
      ))}
    </SocialLinks>
  );
}

export default connect(SocialIcons);

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  margin: 0px;
`;

const SocialLink = styled(Link)`
  text-decoration: none;
  margin: 10px 20px;
`;
