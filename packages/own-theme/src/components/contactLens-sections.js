import { styled } from "frontity";
import Images from "../assets/images";
import colors from "../styles/colors";

export default function ContactLensSections() {
  return (
    <Container>
      <div className="title">
        <hr />
        <h4>EXPERT SURGEONS & STAFF</h4>
      </div>
      <div className="inner-container">
        <div className="featured-image">
          <img src={Images.drug} alt="our logo" />
        </div>
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
          <p>
            Our expert doctors and staff are dedicated to meeting your eye care
            needs in the most convenient way possible. We are excited to allow
            our patients to order contacts from the comfort of their own homes.
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px;
  position: relative;

  & .text {
    display: flex;
    flex-direction: column;
    margin: 0px 40px;
    width: 30%;
  }

  & .text p {
    line-height: 26px;
    font-size: 18px;
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
    height: 60px;
    width: 60px;
    background-color: ${colors.lightBlue};
    border-radius: 50%;
    position: absolute;
    z-index: 1;
  }

  & .icon h4 {
    margin: 2px;
    position: relative;
    z-index: 2;
    margin-left: 15px;
    color: ${colors.gold};
  }

  & .icon h5 {
    margin: 2px;
    position: relative;
    margin-left: 15px;
    z-index: 2;
  }

  & .featured-image > img {
    width: 500px;
    margin: 0px 40px;
  }

  & .inner-container {
    display: flex;
    align-item: center;
    justify-content: center;
    margin: 80px auto;
  }
`;
