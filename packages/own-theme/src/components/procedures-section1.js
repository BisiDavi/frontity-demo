import { styled } from "frontity";
import Images from "../assets/images";
import colors from "../styles/colors";

export default function ProceduresSection1() {
  return (
    <Container>
      <Title>
        <hr />
        <h1>PROCEDURES</h1>
      </Title>
      <Row>
        <ProceduresIcons>
          <img src={Images.visionIcon} alt="vision" />
          <img src={Images.cataractIcon} alt="cataract" />
          <img src={Images.eyeIcon} alt="eye care" />
          <img src={Images.cosmeticsIcon} alt="cosmetic" />
        </ProceduresIcons>
        <img
          src={Images.proceduresImg1}
          alt="couple smiling while taking a selfie"
        />
      </Row>
      <Row>
        <img src={Images.wavvyBlueImg} alt="wavvy icon" />
        <InnerRow>
          <Card>
            <h2>
              <b>LASER</b> VISION CORRECTION
            </h2>
            <hr />
            <h5>YOU DESERVE THE BEST</h5>
          </Card>
          <span>
            <p>
              At Bagan Strinden Vision, we strive to make this life changing
              experience truly exceptional. Drs. Bagan and Strinden have
              successfully walked thousands of patients through this process
              while making it as easy as possible. We use the latest in
              refractive surgery technology in order to get the best results.
            </p>
          </span>
        </InnerRow>
        <InnerRow>
          <Card>
            <h2>
              CATARACT<b> SURGERY</b>
            </h2>
            <hr />
            <h5>YOUR LIFE IS WORTH SEEING</h5>
          </Card>
          <span>
            <p>
              Offering the latest in Custom Cataract Surgery and the extensive
              expertise of our surgeons, Bagan Strinden Vision is able to
              deliver the very best results in modern cataract surgery. Dr.
              Strinden and Dr. Bagan combine the cutting edge technology of
              cataract surgery with laser vision correction to not only clear
              your vision, but reduce or eliminate the need for glasses.
            </p>
          </span>
        </InnerRow>
        <InnerRow>
          <Card>
            <h2>
              <b>GENERAL</b> EYE CARE
            </h2>
            <hr />
            <h5>TAKING CARE OF YOU</h5>
          </Card>
          <span>
            <p>
              If your goals is to achieve the best possible vision, then Bagan
              Strinden Vision is your kind of eye clinic. Our expert surgeons
              and staff partner with you on your journey to clear vision. Book
              an appointment today to meet our surgeons and take the first step
              to clear vision.{" "}
            </p>
          </span>
        </InnerRow>
        <InnerRow>
          <Card>
            <h2>
              <b>COSMETIC</b>
            </h2>
            <hr />
            <h5>LOVE THE WAY YOU LOOK</h5>
          </Card>
          <span>
            <p>
              Our expert surgeons can take years off of your face. Don't love
              the way you look? Do you have droopy eyelids or facial wrinkles?
              At Bagan Strinden Vision, a medical doctor specially trained in
              cosmetic surgery will perform your procedure. Dr. Strinden has
              successfully completed thousands of cosmetic procedures with
              spectacular results.
            </p>
          </span>
        </InnerRow>
      </Row>
      <Button>Schedule a consultation</Button>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const ProceduresIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InnerRow = styled(Row)`
  justify-content: space-around;
  margin: 20px auto;
`;

const Button = styled.button`
  background-color: ${colors.navy};
  color: white;
  font-size: 16px;
  padding: 20px;
`;
