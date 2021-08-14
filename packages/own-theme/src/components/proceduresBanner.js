import { styled } from "frontity";

export default function ProceduresBanner() {
  return (
    <Container>
      <span>
        <h1>
          HERE TO <b>SERVE YOU</b>
        </h1>
        <h5>LASIK & CATARACT SURGEONS</h5>
      </span>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("https://res.cloudinary.com/verrb-inc/image/upload/v1628906059/proceduresBanner_sqk20z.webp");
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 900px;
  background-size: cover;
  background-position: center;
  justify-content: center;
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

  @media (max-width: 1000px) {
    height: 500px;
  }
  
  @media (max-width: 500px) {
    & h5 {
      font-size: 15px;
    }

    & h1 {
      font-size: 30px;
    }
  }
`;
