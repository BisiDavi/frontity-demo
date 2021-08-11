import { styled } from "frontity";
import Images from "../assets/images";
import colors from "../styles/colors";

export default function TeamSection1() {
  return (
    <Section>
      <img src={Images.staff} alt="staff image" />
      <div className="text-content">
        <hr />
        <h3>
          OUR STAFF IS <b>WELL TRAINED</b> TO UNDERSTAND <b>YOUR EYE</b>{" "}
          CONDITION
        </h3>
        <p>
          With
          <span>
            {" "}
            <p>25 YEARS</p>
          </span>
          in practice we have a wealth of <b>experience</b>
        </p>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #e5e5e5;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  & img {
    height: 450px;
  }

  & hr {
    position: absolute;
    width: 45%;
    right: 0px;
  }

  & h3 {
    margin-top: 50px;
    width: 70%;
    font-size: 30px;
    font-family: "Open-sans", sans-serif;
    font-weight: normal;
  }
  & .text-content {
    width: 40%;
  }

  & .text-content span {
    position: relative;
    margin: 0px 5px;
  }

  & .text-content p {
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  & .text-content p b {
    margin-left: 5px;
  }

  & .text-content p span::before {
    content: "";
    height: 30px;
    width: 30px;
    background-color: white;
    border-radius: 50%;
    margin: 0px 10px;
    list-style: none;
    position: absolute;
    top: -3px;
    left: -10px;
    z-index: 1;
  }

  & .text-content span p {
    color: ${colors.gold};
    z-index: 2;
    font-weight: bold;
    margin: 0px 5px;
    position: relative;
  }
`;
