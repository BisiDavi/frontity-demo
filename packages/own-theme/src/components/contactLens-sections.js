import { connect, styled } from "frontity";
import colors from "../styles/colors";

function ContactLensSections({ state, libraries }) {
  const Html2React = libraries.html2react.Component;

  const post = Object.values(state.source.post).filter(
    (f) => f.categories[0] === 63853
  );
  console.log("post ", post);

  return (
    <Container>
      <div className="title">
        <hr />
        <h4>EXPERT SURGEONS & STAFF</h4>
      </div>
      <div className="inner-container">
        <FeaturedImage>
          <img src={post[0].jetpack_featured_media_url} alt="our logo" />
        </FeaturedImage>
        <div className="text">
          <div className="icon-group">
            <div className="icon">
              <span></span>
              <h4>40+</h4>
              <h4>YEARS</h4>
              <h5>OF EXPERIENCE</h5>
            </div>
            <div className="icon">
              <span></span>
              <h4>5000+</h4>
              <h5>ANNUAL</h5>
              <h5>PATIENT VOLUME</h5>
            </div>
          </div>
          <Text>
            <Html2React html={post[0].content.rendered} />
          </Text>
        </div>
      </div>
    </Container>
  );
}

export default connect(ContactLensSections);

const FeaturedImage = styled.div`
  & img {
    width: 600px;
    height: 600px;
    margin: 0px 40px;
  }

  @media (max-width: 500px) {
    & img {
      height: 70%;
      width: 70%;
    }
  }
`;

const Text = styled.div`
  p {
    line-height: 35px;
    font-size: 30px;
  }
  @media (max-width: 1000px) {
    p {
      line-height: 30px;
      font-size: 25px;
    }
  }
  @media (max-width: 500px) {
    p {
      line-height: 25px;
      padding: 10px;
      font-size: 20px;
    }
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px;
  position: relative;

  & .text {
    display: flex;
    flex-direction: column;
    margin: 0px 40px;
    width: 50%;
  }

  & .title {
    display: flex;
    flex-direction: column;
  }
  & .title > h4 {
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 10px;
  }
  & .title > hr {
    position: absolute;
    left: 0;
    width: 30%;
  }

  & .icon-group {
    display: flex;
    align-items: center;
  }

  & .icon {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 20px auto;
    width: 100%;
  }

  & .icon > span {
    height: 200px;
    width: 200px;
    background-color: ${colors.lightBlue};
    border-radius: 50%;
    position: absolute;
    z-index: 1;
  }

  & .icon > h4 {
    margin: 2px;
    position: relative;
    z-index: 2;
    margin-left: 40px;
    font-size: 40px;
    margin-top: 30px;
    line-height: 20px;
    color: ${colors.gold};
  }

  & .icon > h5 {
    margin: 2px;
    position: relative;
    z-index: 2;
    margin-left: 40px;
    font-size: 25px;
    margin-top: 15px;
    line-height: 20px;
    z-index: 2;
  }

  & .icon-group {
    margin: 50px 0px;
  }

  & img {
    width: 600px;
    height: 600px;
    margin: 0px 40px;
  }

  & .inner-container {
    display: flex;
    align-item: center;
    justify-content: space-around;
    margin: 80px auto;
  }

  @media (max-width: 1000px) {
    .inner-container {
      flex-direction: column;
      align-items: center;
    }

    & .text {
      width: 100%;
    }

    &.text > p {
      line-height: 30px;
      font-size: 25px;
    }
  }

  @media (max-width: 500px) {
    padding: 10px;

    & .title > h4 {
      font-size: 15px;
      letter-spacing: 2px;
      margin-left: 40px;
    }

    & .title > hr {
      width: 70%;
    }

    & img {
      height: 70%;
      width: 70%;
    }

    & .inner-container {
      margin-top: 40px;
    }

    & .icon > h4 {
      font-size: 20px;
      margin: 0px;
      margin-left: 35px;
      margin-bottom: 5px;
    }

    & .icon > span {
      height: 100px;
      width: 100px;
    }
    & .icon > h5 {
      font-size: 15px;
      margin: 0;
      margin-left: 35px;
    }

    & .text > p {
      line-height: 25px;
      padding: 10px;
      font-size: 20px;
    }

    & .icon-group {
      margin: 0px;
    }
  }
`;
