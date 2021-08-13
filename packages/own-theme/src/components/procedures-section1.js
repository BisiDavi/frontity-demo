import { styled, connect } from "frontity";
import Images from "../assets/images";
import colors from "../styles/colors";
import TitleCard from "./titleCard";
import Link from "./link";
import proceduresContent from "../json/procedures.json";

function ProceduresSection1({ state }) {
  return (
    <Container>
      <div className="title">
        <hr />
        <h4>PROCEDURES</h4>
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
      </div>
    </Container>
  );
}

export default connect(ProceduresSection1);

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
    width: 22%;
    position: absolute;
    left: 0;
  }

  & .title > h4 {
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 10px;
    margin-left: 200px;
  }

  @media (max-width: 1000px) {
    & .row.first {
      padding: 0;
    }

    & .title > hr {
      width: 35%;
    }

    & .title > h4 {
      margin-left: 80px;
    }

    & .row.first > img.main-img {
      order: 2;
      height: 50%;
      width: 50%;
    }

    & .row.first > .icons {
      order: 1;
      margin: 40px;
      grid-gap: 50px;
    }

    & .row.first > .icons > img {
      height: 80px;
    }

    & .title hr {
      width: 30%;
    }

    & .content > .row {
      padding: 30px;
    }
    & .row > .inner-row > span p {
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media (max-width: 500px) {
    padding-top: 20px;

    & .row.first > img.main-img {
      height: 100%;
      width: 100%;
    }
    & .row > .inner-row > span {
      width: 100%;
    }

    & .inner-row > div {
      width: 70%;
      height: 50%;
    }

    & .inner-row,
    & .row.first {
      flex-direction: column;
      padding: 0;
      width: 100%;
    }

    & .row.first > img.main-img {
      height: 100%;
      width: 100%;
    }
  }
`;
