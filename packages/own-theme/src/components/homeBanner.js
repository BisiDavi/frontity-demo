import { styled } from "frontity";

import Link from "./link";
import bannerImg from "../assets/homeBanner.png";
import scroll from "../assets/scroll.png";

function HomeBanner() {
  return (
    <Banner>
      <Bannercontent>
        <span>
          <h1>
            SEE LIFE <b>CLEARLY</b>
          </h1>
          <p>LASIK & CATARACT SURGEONS</p>
        </span>
        <ButtonGroup>
          <Link link="/category/schedule-consultation">
            <button>Schedule a consultation</button>
          </Link>
          <button>Take a self test</button>
        </ButtonGroup>
        <Scroll>
          <img src={scroll} alt="go down" />
        </Scroll>
      </Bannercontent>
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
`;

const Bannercontent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 600px;

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
`;

const ButtonGroup = styled.div`
  display: flex;
  & button {
    padding: 25px 40px;
    font-size: 20px;
    font-weight: bold;
    border: none;
    margin: 0 30px;
  }

  & button:last-child {
    background-color: transparent;
    border: 1px solid white;
    color: white;
  }
`;

const Scroll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
`;
