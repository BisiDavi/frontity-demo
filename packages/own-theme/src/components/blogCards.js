import { styled } from "frontity";

export function BigBlogCard({ content }) {
  return (
    <Card>
      {content.inverted ? (
        <div className="text">
          <p>{content.date}</p>
          <h1>{content.title}</h1>
          <hr />
          <h5>{content.author}</h5>
          <p>{content.text}</p>
        </div>
      ) : (
        <img src={content.img} alt={content.title} />
      )}
      {content.inverted ? (
        <img src={content.img} alt={content.title} />
      ) : (
        <div className="text">
          <p>{content.date}</p>
          <h1>{content.title}</h1>
          <hr />
          <h5>{content.author}</h5>
          <p>{content.text}</p>
        </div>
      )}
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  align-items: center;

  & .text {
    display: flex;
  }
`;

export default function SmallBlogCards({ content }) {
  return (
    <SmallCard>
      <img src={content.img} alt={content.title} />
      <div>
        <h1>{content.title}</h1>
        <p>{content.text}</p>
      </div>
    </SmallCard>
  );
}

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
`;
