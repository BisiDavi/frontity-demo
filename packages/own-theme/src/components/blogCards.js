import { styled } from "frontity";

export function BigBlogCard(content) {
  return (
    <Card>
      {content.inverted ? (
        <Text>
          <p>{content.date}</p>
          <h1>{content.title}</h1>
          <hr />
          <h5>{content.author}</h5>
          <p>{content.text}</p>
        </Text>
      ) : (
        <img src={content.img} alt={content.title} />
      )}
      {content.inverted ? (
        <img src={content.img} alt={content.title} />
      ) : (
        <Text>
          <p>{content.date}</p>
          <h1>{content.title}</h1>
          <hr />
          <h5>{content.author}</h5>
          <p>{content.text}</p>
        </Text>
      )}
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  align-items: center;
`;

export default function SmallBlogCards() {
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
