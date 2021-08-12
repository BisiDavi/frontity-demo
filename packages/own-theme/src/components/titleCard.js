import colors from "../styles/colors";
import { styled } from "frontity";

export default function TitleCard({ content }) {
  return (
    <Card>
      <h4>{content.title}</h4>
      <hr />
      <p>{content.role}</p>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 250px;
  background-color: ${colors.glassy};
  padding: 40px;
  border-radius: 20px;
  margin: 0px 40px;

  & hr {
    width: 100%;
    border: 1px solid #565151;
    font-weight: 100;
    font-size: 10px;
  }

  & h4 {
    font-size: 20px;
  }

  & p {
    letter-spacing: 2px;
    font-size: 15px;
  }
`;
