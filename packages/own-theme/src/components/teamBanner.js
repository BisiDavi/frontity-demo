import { styled } from "frontity";
import Images from "../assets/images";

export default function TeamBanner() {
  return (
    <Banner className="banner">
      <div className="row">
        <div className="column">
          <div className="text">
            <hr />
            <h1>
              OUR <b>TEAM</b>
            </h1>
          </div>
          <img className="img1" src={Images.team1} alt="team" />
        </div>
        <div className="column">
          <img className="img2" src={Images.team2} alt="our-team" />
        </div>
      </div>
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
  & .column {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
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

  & img.img1 {
    height: 75vh;
  }

  & img.img2 {
    height: 100vh;
  }

  @media (max-width: 1280px) {
    height: unset;
    padding: 30px 0px;

    & img.img1,
    & img.img2 {
      height: 100%;
      width: 100%;
    }

    & .text h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 500px) {
    & .text h1 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    & .column {
      margin: 10px;
      padding: 0px;
    }
  }
`;
