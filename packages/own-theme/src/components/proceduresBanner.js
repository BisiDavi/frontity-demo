import { styled } from "frontity";
import Images from "../assets/images";

export default function ProceduresBanner() {
  return (
    <Container>
      <h1>
        HERE TO <b>SERVE YOU</b>
      </h1>
      <h5>LASIK & CATARACT SURGEONS</h5>

      <button>Take a self test</button>
      <img src={Images.scroll} alt="scroll" />
    </Container>
  );
}

const Container = styled.section`
  background-image: url(${Images.proceduresBanner});
`;
