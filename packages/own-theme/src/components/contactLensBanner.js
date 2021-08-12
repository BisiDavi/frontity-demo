import { styled } from "frontity";
import Images from "../assets/images";

export default function ContactLensBanner() {
  return (
    <Container>
      <div>
        <h1>
          CONTACT <b>LENSES</b>
        </h1>
        <p>Online Contact Lens Ordering in Fargo</p>
      </div>
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
    font-size: 40px;
    font-weight: 500;
    text-align: center;
  }

  & p {
    color: white;
    font-size: 20px;
    margin-top: 50px;
    font-weight: bold;
    letter-spacing: 4px;
  }
`;
