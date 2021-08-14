import { styled } from "frontity";

export default function ClinicalBanner() {
  return (
    <Container>
      <h1>
        CLINICAL <b>TRIALS</b>
      </h1>
      <p>Ophthalmology Clinical Trials & Eye Research in Fargo</p>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://res.cloudinary.com/verrb-inc/image/upload/v1628906059/clinical_l91sof.webp");
  background-size: cover;
  flex-direction: column;
  background-position: center;
  height: 800px;
  color: white;

  & button {
    border: 1px solid white;
    color: white;
    width: 300px;
    height: 60px;
    font-weight: bold;
    background-color: transparent;
    font-size: 20px;
    margin-top: 100px;
  }

  & p {
    font-size: 30px;
    margin-top: 0;
    letter-spacing: 10px;
  }

  & h1 {
    font-size: 60px;
    font-weight: normal;
    margin: 10px auto;
  }

  @media (max-width: 1000px) {
    height: 500px;

    & h1 {
      font-size: 45px;
    }

    & p {
      font-size: 20px;
      text-align: center;
      letter-spacing: 5px;
    }
  }

  @media (max-width: 500px) {
    & p {
      font-size: 16px;
      letter-spacing: 1px;
      font-weight: 500;
    }

    & h1 {
      font-size: 30px;
    }
  }
`;
