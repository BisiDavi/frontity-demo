import { styled, connect } from "frontity";
import colors from "../styles/colors";

function SmallBlogCards({ content, libraries }) {
  const Html2React = libraries.html2react.Component;
  return (
    <SmallCard>
      {content.map((data, index) => (
        <div className="blog-card" key={index}>
          <img src={data.jetpack_featured_media_url} alt="blog post image" />
          <div className="text-group">
            <h1 dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
            <Html2React html={data.content.rendered} />
          </div>
        </div>
      ))}
    </SmallCard>
  );
}

export default connect(SmallBlogCards);

const SmallCard = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;

  & .blog-card {
    flex-direction: column;
  }

  & .text-group {
    background-color: ${colors.glassy};
    padding: 30px;
  }

  & .text-group > p {
    line-height: 25px;
    font-size: 20px;
  }

  & .blog-card > img {
    width: 100%;
    height: 400px;
  }

  & .blog-card {
    margin: 10px;
  }

  @media (max-width: 1280px) {
    grid-gap: 10px;

    & .blog-card > img {
      width: 100%;
      height: 300px;
    }
    & .card > div.inverted > .text {
      padding-left: 60px;
    }

    & .card > img {
      height: 450px;
    }

    & .text-group > p {
      font-size: 18px;
      line-height: 24px;
    }

    & .text-group > h1 {
      font-size: 20px;
      margin: 0px;
    }
  }
`;
