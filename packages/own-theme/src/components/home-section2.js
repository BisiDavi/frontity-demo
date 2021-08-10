import { connect, styled } from "frontity";
import waves from "../assets/waves.png";
import consulting from "../assets/consulting.png";
import sun from "../assets/sun.png";
import vision from "../assets/vision.png";
import colors from "../styles/colors";

function HomeSection2({ data }) {
  return (
    <Container>
      <h3>STEPS TO CLEAR VISION</h3>
      <LeftWaveDesign />
      <RightWaveDesign />
      <CardGroup>
        <Card>
          <img src={consulting} alt="consulting icon" />
          <h2>SCHEDULE A CONSULTATION</h2>
          <p>
            Come in for a no-pressure consultation where we'll go over your
            options and our recommendations. We also go over all of your
            financing options at that time!
          </p>
        </Card>
        <Card>
          <img src={vision} alt="vision icon" />
          <h2>SHORT 5-MINUTE PROCEDURE</h2>
          <p>
            Our expert surgeons complete the entire procedure in just a few
            minutes. The entire process is painless and you'll back to normal
            within a few hours!
          </p>
        </Card>
        <Card>
          <img src={sun} alt="sun icon" />
          <h2>SEE LIFE CLEARLY!</h2>
          <p>
            With our clear vision guarantee, you will have clear vision for
            life. We are with you for the long haul. With your new, clear vision
            you'll have more money for what you love, and more time for who you
            love!
          </p>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default connect(HomeSection2);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: white;
  position: relative;
  background-position: center;
  align-items: center;
  background-image: url(${waves});
  background-size: cover;

  & h3 {
    font-size: 30px;
  }
`;

const LeftWaveDesign = styled.img`
  position: absolute;
  left: 0px;
  top: 40px;
`;

const RightWaveDesign = styled.img`
  position: absolute;
  rightt: 0px;
  top: 0px;
`;

const CardGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 30px auto;
`;

const Card = styled.div`
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

  & img {
    display: flex;
    align-items: center;
    background-color: ${colors.gold};
    margin: auto;
    border-radius: 50%;
    padding: 20px;
    justify-content: center;
  }

  & h2 {
    text-align: center;
    font-size: 16px;
  }

  & p {
    font-size: 16px;
    line-height: 24px;
  }

  & hr {
    background-color: red;
    width: 100%;
    position: absolute;
    bottom: 5px;
  }
`;
