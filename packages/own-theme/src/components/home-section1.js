import { connect, styled } from "frontity";

function ScheduleConsultation({ data }) {
  return (
    <Container>
      <TextContent>
        <h5>LEAVE BLURRY VISION BEHIND</h5>
      </TextContent>
      <FeaturedImage>
        <img src="" />
      </FeaturedImage>
    </Container>
  );
}

export default connect(ScheduleConsultation);

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 100px;
  background-color: #e5e5e5;
`;

const TextContent = styled.div`
  display: flex;
  border-top: 1px solid black;
  flex-direction: column;
`;

const FeaturedImage = styled.div`
  display: flex;
`;
