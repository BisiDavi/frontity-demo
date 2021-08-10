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

  & button {
    border: 1px solid white;
    color: white;
    width: 300px;
    height: 60px;
  }
`;
