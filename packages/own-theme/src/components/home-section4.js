import { connect, styled } from "frontity";
import colors from "../styles/colors";
import quoteIcon from "../assets/quoteIcon.png";

export default function HomeSection4({state}) {
  return (
    <Container>
      <h3>TESTIMONIALS</h3>
      <InnerContainer>
        <FullTestimonial>
          <img src={quoteIcon} alt="" />
          <article>
            <img src="" alt="quote" />
            <p></p>
          </article>
        </FullTestimonial>
        <TestmonialsGroup>
          <img src="" alt="" />
          <p></p>
        </TestmonialsGroup>
      </InnerContainer>
    </Container>
  );
}

export default connect(HomeSection4)

const Container = styled.section`
  background-color: ${colors.light};
  justify-content: space-around;
  align-items: center;
  display: flex;
  height: 500px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: flex;
`;

const FullTestimonial = styled.div`
  display: flex;
  flex-direction: column;

  & h4 {
    font-weight: bold;
    font-size: 20px;
  }
`;

const TestmonialsGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid black;
`;
