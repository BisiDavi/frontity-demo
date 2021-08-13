import { styled } from "frontity";
import Images from "../assets/images";

export default function ContactLensBanner() {
  return (
    <Container>
      <h1>
        CONTACT <b>LENSES</b>
      </h1>
      <p>Online Contact Lens Ordering in Fargo</p>
    </Container>
  );
}

const Container = styled.section`
  background-image: url(${Images.contactLens});
  height: 850px;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  & h1 {
    color: white;
    font-size: 70px;
    font-weight: 500;
    text-align: center;
  }

  & p {
    color: white;
    font-size: 40px;
    margin-top: 50px;
    font-weight: normal;
    letter-spacing: 6px;
  }

  @media (max-width: 1000px) {
    height: 600px;

    & p {
      font-size: 25px;
      text-align: center;
      margin: 20px 0px;
    }

    & h1 {
      font-size: 40px;
      margin: 10px 0px;
      line-height: 30px;
    }
  }

  @media (max-width: 500px) {
    & p {
      font-size: 18px;
      text-align: center;
      padding: 10px;
      margin: 20px 0px;
    }
  }
`;
