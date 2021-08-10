import { styled } from "frontity";
import Images from "../assets/images";

export default function ClinicalSection1() {
  return (
    <Container>
      <Title>
        <hr />
        <h4>EXPERT SURGEONS & STAFF</h4>
      </Title>
      <InnerContainer>
        <Card>
          <h4>MELANIE RINKENBERGER</h4>
          <hr />
          <p>STUDY COORDINATOR</p>
        </Card>
        <Text>
          <IconGroup>
            <Icon>
              <span></span>
              <h4>40+</h4>
              <h4>YEARS</h4>
              <h5>OF EXPERIENCE</h5>
            </Icon>
            <Icon>
              <span></span>
              <h4>5000+</h4>
              <h5>ANNUAL</h5>
              <h5>PATIENT VOLUME</h5>
            </Icon>
          </IconGroup>
          <p>
            Our expert surgeons and staff are committed to advancing the field
            of eye care. Learn more about how we have taken a leadership role in
            our community and the eyecare industry.
          </p>
          <li>
            <img src={Images.emailIcon} />{" "}
            <p>melanie@baganstrindenvision.com</p>{" "}
          </li>
          <li>
            <img src={Images.telephoneIcon} />{" "}
            <a href="tel:7013643865">701.364.3865</a>{" "}
          </li>
        </Text>
      </InnerContainer>
      <img src={Images.wavvyBlueImg} />
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
  position: relative;

  & hr {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const InnerContainer = styled.section`
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    font-size: 14x;
    line-height: 16px;
    margin-top: 20px;
  }
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
`;
