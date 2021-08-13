import { connect, styled } from "frontity";
import Images from "../assets/images";

function TeamSection3({ state, libraries }) {
  const teamPost = Object.values(state.source.post).filter(
    (f) => f.categories[0] === 196231
  );
  const Html2React = libraries.html2react.Component;

  return (
    <Section className="bioStory">
      <div className="title">
        <hr />
        <h3>BIO STORY</h3>
      </div>
      <img src={Images.dots} alt="dots" className="dots first" />
      {teamPost.map((post, index) => (
        <div key={index} className="stories">
          <div className="story">
            <Author>
              <img src={post.jetpack_featured_media_url} alt="doctor" />
              <h4 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Author>
            <Text>
              <Html2React html={post.content.rendered} />
            </Text>
          </div>
        </div>
      ))}
      <img src={Images.dots} alt="dots" className="dots second" />
    </Section>
  );
}

export default connect(TeamSection3);

const Author = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;

  img {
    height: 150px;
  }

  h4 {
    text-align: center;
    font-size: 14px;
  }
  @media (max-width: 1280px) {
    img {
      height: 100%;
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    img {
      height: 50%;
      width: 50%;
      margin: auto;
    }
  }
`;

const Text = styled.div`
  line-height: 25px;
  font-size: 16px;
  font-family: "Poppins";

  @media (max-width: 1280px) {
    width: 100%;
    line-height: 20px;
    font-size: 14px;

    p {
      line-height: 25px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Section = styled.section`
  & .stories {
    display: flex;
    justify-content: center;
    padding: 0px 40;
    align-items: center;
  }

  & .story {
    display: flex;
    width: 80%;
    margin: auto;
    background-color: #e9f1f3;
    margin: 20px;
    padding: 30px;
    border-radius: 20px;
  }

  @media (max-width: 1280px) {
    position: relative;

    & .author > img {
      height: 100%;
      width: 100%;
    }

    & .author > h4 {
      text-align: center;
      font-size: 13px;
    }

    & img.dots.first {
      position: absolute;
      z-index: 1;
      height: 200px;
    }

    & .stories {
      position: relative;
      z-index: 2;
      padding: 20px;
    }

    & .story {
      align-items: center;
    }

    img.dots.second {
      position: absolute;
      right: 10px;
      bottom: 0px;
      height: 100px;
    }
  }

  @media (max-width: 500px) {
    & .title h3 {
      text-align: right;
      margin-right: 10px;
      letter-spacing: 2px;
      margin-top: 0;
    }

    & .author > img {
      height: 50%;
      width: 50%;
      margin: auto;
    }

    & .story {
      margin: 0px;
      flex-direction: column;
      text-align: center;
    }
  }
`;
