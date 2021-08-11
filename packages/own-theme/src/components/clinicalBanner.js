import { styled } from "frontity";
import Images from "../assets/images";

export default function ClinicalBanner() {
  return (
    <Container>
      <h1>
        CLINICAL <b>TRIALS</b>
      </h1>
      <p>Ophthalmology Clinical Trials & Eye Research in Fargo</p>

      <button>Contact Us</button>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Images.clinicialImg});
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
`;
