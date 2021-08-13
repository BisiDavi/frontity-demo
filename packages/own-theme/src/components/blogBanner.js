import { styled } from "frontity";
import Images from "../assets/images";

export default function BlogBanner() {
  return (
    <Container>
      <h1>Blog</h1>
      <p>Get health tips for your eye.</p>
    </Container>
  );
}

const Container = styled.section`
  background-image: url(${Images.blogBanner});
  height: 850px;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  & h1 {
    color: white;
    font-weight: bold;
    font-size: 80px;
    letter-spacing: 20px;
    text-decoration: underline;
    margin: 20px auto;
  }

  & p {
    font-size: 40px;
    letter-spacing: 4px;
    margin: 20px auto;
  }
`;
