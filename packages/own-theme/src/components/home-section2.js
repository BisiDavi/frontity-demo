import { connect, styled } from "frontity";
import waves from "../assets/waves.png";
import consulting from "../assets/consulting.png";
import sun from "../assets/sun.png";
import vision from "../assets/vision.png";
import colors from "../styles/colors";

function HomeSection2({ state, actions, libraries }) {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  const HTML2React = libraries.html2react.Component;

  console.log("post", post);
  console.log("data", data);

  return (
    <Container>
      <h3>STEPS TO CLEAR VISION</h3>
      <div className="card-group">
        <div className="card">
          <img src={consulting} alt="consulting icon" />
          <h2>SCHEDULE A CONSULTATION</h2>
          <p>
            Come in for a no-pressure consultation where we'll go over your
            options and our recommendations. We also go over all of your
            financing options at that time!
          </p>
        </div>
        <div className="card">
          <img src={vision} alt="vision icon" />
          <h2>SHORT 5-MINUTE PROCEDURE</h2>
          <p>
            Our expert surgeons complete the entire procedure in just a few
            minutes. The entire process is painless and you'll back to normal
            within a few hours!
          </p>
        </div>
        <div className="card">
          <img src={sun} alt="sun icon" />
          <h2>SEE LIFE CLEARLY!</h2>
          <p>
            With our clear vision guarantee, you will have clear vision for
            life. We are with you for the long haul. With your new, clear vision
            you'll have more money for what you love, and more time for who you
            love!
          </p>
        </div>
      </div>
    </Container>
  );
}

export default connect(HomeSection2);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  align-items: flex-start;
  background-color: white;
  position: relative;
  background-position: center;
  align-items: center;
  background-image: url(${waves});
  background-size: cover;

  & h3 {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 500;
  }

  & .card-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin: 30px auto;
  }

  & .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    height: 300px;
    width: 300px;
    justify-content: center;
    border-radius: 10px;
    padding: 30px;
    background-color: #e9f1f3;
    -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  & .card > img {
    display: flex;
    align-items: center;
    background-color: ${colors.gold};
    margin: auto;
    border-radius: 50%;
    padding: 20px;
    justify-content: center;
  }

  & .card > h2 {
    text-align: center;
    font-size: 16px;
  }

  & .card > p {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 1000px) {
    padding: 0px;
    width: 100%;

    & h3 {
      font-size: 24px;
      margin-top: 40px;
      margin-bottom: 0px;
    }

    & .card {
      height: 300px;
      margin: 15px;
    }

    & .card > img {
      height: 30px;
      width: 30px;
    }

    & .card > h2 {
      font-size: 16px;
    }

    & .card > p {
      font-size: 16px;
      line-height: 20px;
      text-align: center;
    }
    & .card-group {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    & .card-group {
      width: 100%;
      flex-direction: column;
    }
  }
`;
