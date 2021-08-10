import { styled } from "frontity";
import Images from "../assets/images";

export default function ContactLensBanner() {
  return (
    <Container>
      <h1>
        CONTACT <b>LENSES</b>
      </h1>
      <p>Online Contact Lens Ordering in Fargo</p>
      <button>Order Now</button>
    </Container>
  );
}

const Container = styled.section`
  background-image: url(${Images.contactLens});

  & button {
    height: 60px;
    width: 300px;
  }
`;
