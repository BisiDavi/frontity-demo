import { connect, styled } from "frontity";
import travelling from "../assets/travelling.png";

function HomeSection1({ state }) {
  return (
    <Container>
      <TextContent>
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
      </TextContent>
      <FeaturedImage>
        <img src={travelling} alt="travelling friends" />
      </FeaturedImage>
    </Container>
  );
}

export default connect(HomeSection1);

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 100px;
  background-color: #e5e5e5;
`;

const TextContent = styled.div`
  display: flex;
  border-top: 1px solid black;
  flex-direction: column;
`;

const FeaturedImage = styled.div`
  display: flex;
`;
