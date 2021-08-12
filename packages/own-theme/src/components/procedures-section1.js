import { styled } from "frontity";
import Images from "../assets/images";
import colors from "../styles/colors";
import TitleCard from "./titleCard";
import proceduresContent from "../json/procedures.json";

export default function ProceduresSection1() {
  return (
    <Container>
      <div className="title">
        <hr />
        <h1>PROCEDURES</h1>
      </div>
      <div className="row">
        <div className="icons">
          <img src={Images.visionIcon} alt="vision" />
          <img src={Images.cataractIcon} alt="cataract" />
          <img src={Images.eyeIcon} alt="eye care" />
          <img src={Images.cosmeticsIcon} alt="cosmetic" />
        </div>
        <img
          src={Images.proceduresImg1}
          className="main-img"
          alt="couple smiling while taking a selfie"
        />
      </div>
      <div className="row">
        <img src={Images.wavvyBlueImg} alt="wavvy icon" />
        {proceduresContent.map((content, index) => (
          <InnerRow key={index}>
            <TitleCard content={content} />
            <span>
              <p>{content.text}</p>
            </span>
          </InnerRow>
        ))}
      </div>
      <div className="button">Schedule a consultation</div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  & .row {
    display: flex;
    align-items: center;
    position: relative;
    margin: auto;
    justify-content: space-around;
    align-items: flex-start;
    padding: 30px 100px;
  }

  & .icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 60px;
  }

  & .main-img {
    height: 100%;
    width: 100%;
  }

  & .button {
    background-color: ${colors.navy};
    color: white;
    font-size: 16px;
    padding: 20px;
  }

  & .inner-row {
    justify-content: space-around;
    margin: 20px auto;
  }
`;
