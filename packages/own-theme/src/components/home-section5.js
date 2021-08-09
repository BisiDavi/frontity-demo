import { connect, styled } from "frontity";
import colors from "../styles/colors";

function HomeSection5({ state }) {
  return (
    <Container>
      <h3>Take The Self Test</h3>
      <button>Start Now </button>
    </Container>
  );
}

export default connect(HomeSection5);

const Container = styled.section`
  background-color: ${colors.gray};
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h3 {
    font-weight: 500;
    font-size: 25px;
    text-align: center;
    margin-bottom: 40px;
  }

  & button {
    background-color: ${colors.navy};
    height: 50px;
    font-size: 20px;
    width: 200px;
    color: white;
    font-
  }
`;
