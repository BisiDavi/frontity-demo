import { styled } from "frontity";
import bannerImg from "../assets/homeBanner.png";

function HomeBanner() {
  return (
    <Banner>
      <span>
        <h1>
          SEE LIFE <b>CLEARLY</b>
        </h1>
        <p>LASIK & CATARACT SURGEONS</p>
      </span>
    </Banner>
  );
}

export default HomeBanner;

const Banner = styled.div`
  display: flex;
  background-image: url(${bannerImg});
  height: 800px;
  align-items: center;
  justify-content: center;
  background-size: cover;
  flex-direction: column;
  background-position: center;

  & span > h1 {
    color: white;
    font-size: 60px;
    line-height: 65px;
    font-weight: 500;
    text-align: center;
  }

  & span > h1 > b {
    font-weight: bold;
  }

  & span > p {
    color: white;
    font-size: 25px;
    letter-spacing: 10px;
    line-height: 28px;
  }

  @media (max-width: 1000px) {
    & span > p {
      font-size: 20px;
      line-height: 24px;
    }

    & span > h1 {
      font-size: 45px;
      line-height: 30px;
    }
  }

  @media (max-width: 500px) {
    height: 300px;

    & span > p {
      font-size: 18px;
      text-align: center;
      line-height: 20px;
      letter-spacing: 1px;
      margin: 10px;
    }

    & span > h1 {
      font-size: 25px;
      line-height: 28px;
      margin: 10px;
    }
  }
`;
