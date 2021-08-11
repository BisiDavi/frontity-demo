import { styled } from "frontity";
import Images from "../assets/images";

export default function BlogBanner() {
  return (
    <Container>
      <h1>Blog</h1>
    </Container>
  );
}

const Container = styled.section`
  background-image: url(${Images.blogBanner});

  & h1 {
    color: white;
    font-weight: bold;
  }
`;
