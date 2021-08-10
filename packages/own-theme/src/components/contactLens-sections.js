import { styled } from "frontity";
import Images from "../assets/images";

export default function ContactLensSections() {
  return (
    <Container>
      <Title>
        <hr />
        <h4>EXPERT SURGEONS & STAFF</h4>
      </Title>
      <InnerContainer>
        <FeaturedImage>
          <img src={Images.drug} alt="our logo" />
        </FeaturedImage>
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
            Our expert doctors and staff are dedicated to meeting your eye care
            needs in the most convenient way possible. We are excited to allow
            our patients to order contacts from the comfort of their own homes.
          </p>

          <button>Order Now</button>
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

const FeaturedImage = styled.div`
  position: relative;
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
