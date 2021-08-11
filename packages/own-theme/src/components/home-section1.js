import { styled } from "frontity";
import travelling from "../assets/travelling.png";
import colors from "../styles/colors";

function HomeSection1() {
  return (
    <Container>
      <TextContent>
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
        <button>Schedule a consultation</button>
      </TextContent>
      <FeaturedImage>
        <img src={travelling} alt="travelling friends" />
      </FeaturedImage>
    </Container>
  );
}

export default HomeSection1;

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 100px;
  background-color: #e5e5e5;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-family: "Poppins", sans-serif;

  & h5 {
    letter-spacing: 5px;
    margin: 10px 0px;
    margin: 15px 0px;
  }

  & h3 {
    font-size: 30px;
    margin: 0;
    letter-spacing: 2px;
    line-height: 32px;
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
    line-height: 25px;
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
`;

const FeaturedImage = styled.div`
  display: flex;
`;
