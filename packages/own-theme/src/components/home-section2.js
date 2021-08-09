import { connect, styled } from "frontity";

function HomeSection2({ data }) {
  return (
    <Container>
      <h3>STEPS TO CLEAR VISION</h3>
      <LeftWaveDesign />
      <RightWaveDesign />
      <CardGroup>
        <Card>
          <h2></h2>
          <p></p>
          <hr />
        </Card>
      </CardGroup>
    </Container>
  );
}

export default connect(HomeSection2);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: white;
  position: relative;
`;

const LeftWaveDesign = styled.img`
  position: absolute;
  left: 0px;
  top: 40px;
`;

const RightWaveDesign = styled.img`
  position: absolute;
  rightt: 0px;
  top: 0px;
`;

const CardGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding: 30px;
  background-color: #e9f1f3;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
