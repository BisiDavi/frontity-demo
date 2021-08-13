import { styled } from "frontity";
import Images from "../assets/images";
import colors from "../styles/colors";
import TitleCard from "./titleCard";

export default function ClinicalSection1() {
  const titleCardContent = {
    title: "MELANIE RINKENBERGER",
    role: "STUDY COORDINATOR",
  };
  return (
    <Container>
      <div className="title">
        <hr />
        <h4>EXPERT SURGEONS & STAFF</h4>
      </div>
      <div className="inner-container">
        <span className="card">
          <TitleCard content={titleCardContent} />
        </span>
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
            Our expert surgeons and staff are committed to advancing the field
            of eye care. Learn more about how we have taken a leadership role in
            our community and the eyecare industry.
          </p>
          <li>
            <img src={Images.emailIcon} />{" "}
            <p>melanie@baganstrindenvision.com</p>{" "}
          </li>
          <li>
            <img src={Images.telephoneIcon} />{" "}
            <a href="tel:7013643865">701.364.3865</a>{" "}
          </li>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url(${Images.bgClinical});
  height: 600px;
  background-position: bottom;
  background-size: cover;
  padding: 100px;

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
  & .inner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px auto;
  }
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

  & .text > li {
    list-style: none;
    display: flex;
    align-items: center;
  }

  & .text > li img {
    margin: 0px 10px;
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

  @media (max-width: 1000px) {
    padding: 10px;

    & .card {
      margin: 0px;
    }

    & .card div {
      margin: 0px;
      padding: 20px;
    }

    & .title > h4 {
      margin-left: 20px;
      margin-top: 100px;
      letter-spacing: 5px;
      margin-bottom: 0px;
    }

    & .title > hr {
      top: 80px;
      width: 50%;
    }

    & .inner-container {
      margin-top: 20px;
    }
  }

  @media (max-width: 500px) {
    padding: 10px;
    height: unset;

    & .inner-container {
      flex-direction: column;
    }

    & .text {
      width: 80%;
    }

    & .inner-container {
      margin: 0px;
      margin-top: 20px;
    }

    & .card div {
      height: 150px;
    }

    & .title > hr {
      top: 40px;
      width: 50%;
    }

    & .title > h4 {
      margin-left: 20px;
      margin-top: 50px;
    }
  }
`;
