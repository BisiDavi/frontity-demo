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
      <div className="row first">
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
      <div className="content">
        <div className="row">
          {proceduresContent.map((content, index) => (
            <div className="inner-row" key={index}>
              <TitleCard content={content} />
              <span>
                <p>{content.text}</p>
              </span>
            </div>
          ))}
        </div>
        <div className="button">Schedule a consultation</div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 80px;

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

  & .button {
    background-color: ${colors.navy};
    color: white;
    font-size: 16px;
    padding: 20px;
    margin: auto;
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 18px;
  }

  & .inner-row {
    justify-content: space-around;
    margin: 20px auto;
    display: flex;
    align-items: center;
  }

  & .row > .inner-row > span p {
    line-height: 28px;
    font-size: 20px;
    letter-spacing: 2px;
  }

  & .row > .inner-row > span {
    width: 50%;
  }

  & .inner-row > div {
    width: 30%;
    margin: 0 40px;
  }

  & .content > .row {
    display: flex;
    flex-direction: column;
  }

  & .row.first {
    width: 80%;
    align-items: center;
  }

  & .title hr {
    width: 30%;
    position: absolute;
    left: 0;
  }
`;
