import colors from "../styles/colors";
import { styled, connect } from "frontity";

function TitleCard({ content, libraries }) {
  const Html2React = libraries.html2react.Component;

  return (
    <Card>
      <h4 dangerouslySetInnerHTML={{ __html: content.title?.rendered }} />
      <hr />
      <Html2React html={content.excerpt?.rendered} />
    </Card>
  );
}

export default connect(TitleCard);

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
