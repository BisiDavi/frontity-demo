import { styled } from "frontity";
import Images from "../assets/images";

export default function Teamsection2() {
  return (
    <Section>
      <div className="title">
        <hr />
        <h3>LASIK & CATARACT SURGEONS</h3>
      </div>
      <div className="content">
        <h2>
          MEET THE <b>DOCTORS</b>
        </h2>
        <div className="card-group">
          <div className="card">
            <img src={Images.doctor1} alt="doctor" />
            <h3>DR. STEVE BAGAN, MD</h3>
            <hr />
          </div>
          <div className="card">
            <img src={Images.doctor2} alt="doctor" />
            <h3>DR. STEVE BAGAN, MD</h3>
            <hr />
          </div>
          <div className="card">
            <img src={Images.doctor3} alt="doctor" />
            <h3>DR. STEVE BAGAN, MD</h3>
            <hr />
          </div>
        </div>
        <div className="contentbg"></div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  position: relative;
  background-color: white;
  padding: 50px 0px;
  flex-direction: column;

  & .title {
    text-align: left;
  }
  & .title hr {
    width: 30%;
    position: absolute;
    left: 0;
  }

  & .content {
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: relative;
  }

  & .contentbg {
    background-image: url(${Images.doctorsbg});
    background-size: cover;
    height: 500px;
    background-size: cover;
    width: 100%;
    position: absolute;
    top: 300px;
    z-index: 1;
  }

  & .card-group {
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: center;
    position: relative;
    z-index: 2;
  }
  & .card {
    margin: 0px 20px;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
  }

  & .card > h3 {
    text-align: center;
  }

  & .background {
    position: absolute;
    left: 0px;
  }
`;
