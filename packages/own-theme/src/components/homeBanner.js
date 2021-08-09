import { connect, styled } from "frontity";
import bannerImg from "../assets/homeBanner.png";

function HomeBanner({ state }) {
  return (
    <Banner>
      <Bannercontent>
        <span>
          <h1>
            SEE LIFE <b>CLEARLY</b>
          </h1>
          <p>LASIK & CATARACT SURGEONS</p>
          <ButtonGroup>
            <button>Schedule a consultation</button>
            <button>Take a self test</button>
          </ButtonGroup>
        </span>
      </Bannercontent>
    </Banner>
  );
}

export default connect(HomeBanner);

const Banner = styled.div`
  display: flex;
  background-image: url(${bannerImg});
  height: 700px;
  align-items: center;
  justify-content: center;
  background-size: cover;
  flex-direction: column;
`;

const Bannercontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
`;
