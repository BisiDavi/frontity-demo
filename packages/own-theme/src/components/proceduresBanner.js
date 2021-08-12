import { styled } from "frontity";
import Images from "../assets/images";
import Link from "./link";

export default function ProceduresBanner() {
  return (
    <Container>
      <span>
        <h1>
          HERE TO <b>SERVE YOU</b>
        </h1>
        <h5>LASIK & CATARACT SURGEONS</h5>
      </span>
      <Link link="/category/schedule-consultation/">
        <button>Schedule a consultation</button>
      </Link>
      <img src={Images.scroll} alt="scroll" />
    </Container>
  );
}

const Container = styled.section`
  background-image: url(${Images.proceduresBanner});
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 900px;
  background-size: cover;
  background-position: center;
  justify-content: space-around;
  color: white;

  & h1 {
    font-size: 50px;
    font-weight: 500;
    margin: 10px auto;
    text-align: center;
  }

  & h5 {
    font-size: 20px;
    letter-spacing: 5px;
    margin: 10px auto;
    text-align: center;
  }

  & button {
    height: 60px;
    width: 300px;
    font-size: 25px;
    color: white;
    border: 1px solid white;
    background-color: transparent;
  }
`;
