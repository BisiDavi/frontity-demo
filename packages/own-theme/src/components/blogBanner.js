import { styled } from "frontity";

export default function BlogBanner() {
  return (
    <Container>
      <h1>Blog</h1>
      <p>Get health tips for your eye.</p>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("https://res.cloudinary.com/verrb-inc/image/upload/v1628906060/blogBanner_zo2ulb.webp");
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

  @media (max-width: 500px) {
    height: 500px;

    & p {
      font-size: 20px;
      margin: 0px;
    }

    & h1 {
      font-size: 40px;
      letter-spacing: 10px;
    }
  }
`;
