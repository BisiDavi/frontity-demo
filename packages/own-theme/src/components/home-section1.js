import { styled } from "frontity";
import travelling from "../assets/travelling.png";
import colors from "../styles/colors";

function HomeSection1() {
  return (
    <Container className="container">
      <div className="text-content">
        <hr />
        <h5>LEAVE BLURRY VISION BEHIND</h5>
        <h3>
          THE FUTURE IS <b>BRIGHT,</b>
        </h3>
        <h3>
          YOU DESERVE TO SEE IT <b>CLEARLY</b>
        </h3>
        <p>
          Our team is passionate about improving lives through clear vision.
          Many of us have had LASIK and know how life changing it is see life
          clearly.{" "}
        </p>
      </div>
      <img src={travelling} alt="travelling friends" />
    </Container>
  );
}

export default HomeSection1;

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 100px;
  background-color: #e5e5e5;

  & .text-content {
    display: flex;
    flex-direction: column;
    width: 50%;
    font-family: "Poppins", sans-serif;
  }

  & h5 {
    letter-spacing: 5px;
    margin: 10px 0px;
    margin: 15px 0px;
    font-size: 20px;
  }

  & h3 {
    font-size: 30px;
    margin: 0;
    letter-spacing: 2px;
    line-height: 32px;
  }

  & img {
    height: 100%;
  }

  & hr {
    width: 40%;
    left: 0p;
    left: 0px;
    position: absolute;
    font-weight: bold;
  }

  & p {
    width: 50%;
    line-height: 30px;
    font-size: 20px;
    font-family: monospace;
  }

  & button {
    height: 50px;
    background-color: ${colors.navy};
    width: 300px;
    color: white;
    margin-top: 100px;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 1000px) {
    padding: 50px;

    & img {
      height: 100%;
      width: 400px;
    }
    & .text-content > h5 {
      font-size: 13px;
    }
    & .text-content > h3 {
      font-size: 20px;
      line-height: 24px;
    }

    & p {
      width: 80%;
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    & .text-content {
      width: 100%;
      margin: 20px 0px;
      order: 2;
    }
    & img {
      width: 100%;
      order: 1;
    }
  }
  @media (max-width: 800px) {
    & p {
      width: 100%;
    }
  }
`;
