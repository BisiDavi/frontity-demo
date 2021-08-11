import { styled } from "frontity";
import bg from "../assets/bg.png";
import roundLogo from "../assets/logoRounded.png";
import colors from "../styles/colors";
import parents from "../assets/parents.png";

function HomeSection3() {
  return (
    <Container>
      <Title>
        <hr />
        <h3>YOUR VISION IS OUR PASSION</h3>
      </Title>
      <h2>EXPERT SURGEONS</h2>
      <InnerContainer>
        <FeaturedImage>
          <img src={parents} alt="parents" />
        </FeaturedImage>
        <Column>
          <TextContent>
            <span></span>
            <h3>25,000+</h3>
            <h5>CATARACT SURGERIES PERFORMED</h5>
          </TextContent>
          <TextContent>
            <span></span>
            <h3>15,000+</h3>
            <h5>LASIK SURGERIES PERFORMED</h5>
          </TextContent>
          <TextContent>
            <span></span>
            <h3>20 / Happy</h3>
            <h5>YOUR VISION AFTER THE PROCEDURE</h5>
          </TextContent>
        </Column>
      </InnerContainer>
    </Container>
  );
}

export default HomeSection3;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  padding: 100px 0px;
  justify-content: flex-start;
  height: 1200px;

  & h2 {
    text-align: center;
    margin: 100px auto;
    font-weight: 500;
    margin-top: 160px;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
    width: 500px;
    display: flex;
    margin-right: 5px;
    position:absolute;
    right:0px;
    top:120px;

  & h3{
    font-size:16px;
    font-family;"Open-sans", sans-serif;
    line-height:16px;
    letter-spacing:3px;
    font-family: 'Poppins', sans-serif;
  }

  & hr {
    border: 1px solid black;
    width:100%;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  margin: 10px 50px;
  flex-direction: column;
`;

const FeaturedImage = styled.div`
  margin: auto 60px;

  & img {
    height: 800px;
    width: 1000px;
  }
`;

const TextContent = styled.div`
  flex-direction: column;
  height: 70px;
  position: relative;
  margin: 50px;
  width: 300px;
  position: relative;

  & span {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100px;
    width: 100px;
    background-color: white;
    border-radius: 50%;
  }

  & h3 {
    color: ${colors.gold};
    z-index: 2;
    text-align: left;
    margin: 0px;
    margin-left: 40px;
    position: relative;
    margin-top: 30px;
    font-size: 25px;
    font-weight: 500px;
  }

  & h5 {
    color: black;
    z-index: 2;
    margin: 5px;
    font-size: 10px;
    line-height: 20px;
    margin-left: 40px;
    letter-spacing: 2px;
    position: relative;
    font-size: 16px;
    font-weight: 300px;
  }
`;
