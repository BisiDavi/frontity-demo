import { styled } from "frontity";
import Images from "../assets/images";

export default function TeamBanner() {
  return (
    <Banner className="banner">
      <div className="row">
        <Column className="column1">
          <div className="text">
            <hr />
            <h1>
              OUR <b>TEAM</b>
            </h1>
          </div>
          <img src={Images.team1} alt="team" />
        </Column>
        <Column className="column2">
          <img src={Images.team2} alt="our-team" />
        </Column>
      </div>
      <img src={Images.scrollBlack} className="scroll" alt="scroll" />
    </Banner>
  );
}

const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  background-size: cover;
  background-image: url(${Images.teambg});
  height: 800px;

  & .row {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    position: relative;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  & .text {
    font-family: "Poppins", sans-serif;
  }

  & .text hr {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 33%;
  }

  & .text h1 {
    font-size: 50px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 60px;
  }

  & .text h1 > b {
    font-weight: bold;
  }

  .column1 img {
    height: 75vh;
  }

  .column2 img {
    height: 100vh;
  }
`;
