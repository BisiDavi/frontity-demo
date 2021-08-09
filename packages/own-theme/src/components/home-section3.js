import { connect, styled } from "frontity";
import bg from "../assets/bg.png";
import roundLogo from "../assets/logoRounded.png";
import colors from "../styles/colors";

function HomeSection3({ data }) {
  return (
    <Container>
      <Title>
        <h3>YOUR VISION IS OUR PASSION</h3>
      </Title>
      <h3>EXPERT SURGEONS</h3>
      <InnerContainer>
        <FeaturedImage>
          <img src={roundLogo} alt="bagan strinden vision logo" />
          <img src="" alt="" />
        </FeaturedImage>
        <TextContent></TextContent>
      </InnerContainer>
    </Container>
  );
}

export default connect(HomeSection3);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #8cb2c2;
  position: relative;
  background-color: url(${bg});
`;

const Title = styled.div`
  border-top: 1px solid black;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FeaturedImage = styled.div`
  position: relative;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  & > h1 {
    color: ${colors.gold};
    font-size: 25px;
    font-weight: 800;
  }

  & > p {
    text-transform: capitalize;
    color: ${colors.navy};
  }
  & > span {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${colors.light};
    height: 100px;
    width: 100px;
  }
`;
