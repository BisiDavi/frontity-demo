import { styled } from "frontity";
import bg from "../assets/bg.png";
import colors from "../styles/colors";

export default function HomeSection3() {
  return (
    <Container>
      <div className="title">
        <hr />
        <h3>YOUR VISION IS OUR PASSION</h3>
      </div>
      <h2>EXPERT SURGEONS</h2>
      <div className="inner-container">
        <div className="featured-image">
          <img
            src="https://res.cloudinary.com/verrb-inc/image/upload/v1628906059/parents_gyzx5t.webp"
            alt="parents"
          />
        </div>
        <div className="column">
          <div className="text-content">
            <span></span>
            <h3>25,000+</h3>
            <h5>CATARACT SURGERIES PERFORMED</h5>
          </div>
          <div className="text-content">
            <span></span>
            <h3>15,000+</h3>
            <h5>LASIK SURGERIES PERFORMED</h5>
          </div>
          <div className="text-content">
            <span></span>
            <h3>20 / Happy</h3>
            <h5>YOUR VISION AFTER THE PROCEDURE</h5>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  padding: 0px;
  justify-content: flex-start;
  background-position: center;
  padding-bottom:50px;

  & h2 {
    text-align: center;
    margin: 50px auto;
    font-weight: 500;
    margin-top: 100px;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
  }

& .title { 
  display: flex;
  flex-direction: column;
    width: 500px;
    display: flex;
    margin-right: 5px;
    position:absolute;
    right:0px;
    top:50px;
  }

  & .title > h3 {
    font-size:16px;
    font-family;"Open-sans", sans-serif;
    line-height:16px;
    letter-spacing:3px;
    font-family: 'Poppins', sans-serif;
  }

  & .title > hr {
    border: 1px solid black;
    width:100%;
  }

  & .inner-container{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  & .column{
    display: flex;
    margin: 10px 50px;
    flex-direction: column;
  }

  & .featured-image{
    margin: auto 60px;
  }

  & .featured-image > img {
    height: 100%;
    width: 100%;
  }

  & .text-content {
    flex-direction: column;
    height: 70px;
    position: relative;
    margin: 50px;
    width: 300px;
    position: relative;
  }

  & .text-content > span {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100px;
    width: 100px;
    background-color: white;
    border-radius: 50%;
  }

  & .text-content > h3 {
    color: ${colors.gold};
    z-index: 2;
    text-align: left;
    margin: 0px;
    margin-left: 40px;
    position: relative;
    margin-top: 30px;
    font-size: 25px;
    font-weight: 500px;
  }

  & .text-content > h5 {
    color: black;
    z-index: 2;
    margin: 5px;
    font-size: 10px;
    line-height: 20px;
    margin-left: 40px;
    letter-spacing: 2px;
    position: relative;
    font-size: 16px;
    font-weight: 300px;
  }

  @media (max-width:1000px){
    padding: 0;
    
    & .featured-image > img {
      height: 100%;
      width: 100%;
    } 
    
    & .column {
    margin: 0px;
    }
    
    &  .column > h2 {
      margin-top: 150px;
      margin: unset;
      margin-top: 150px;
      margin-bottom:20px;
    }

    & .title > hr {
        width: 50%;
        left: 0;
        position: absolute;
        right: 0;
      }

    & .title {
      margin: 0px;
      top: 30px;
      right:10px;
    }
    & .featured-image {
      margin: auto 60px;
    }

    & .text-content{
      padding: 10px;
      margin: 20px;
    }
    
    & .text-content > span {
      height: 80px;
      width: 80px;
    }

    & .text-content > h3 {
      font-size: 16px;
      margin-top: 0;
      margin-left: 10px;
    }
    & .text-content > h5{
        font-size: 13px;
      line-height: 18px;
      margin-left: 10px;
    }
  }

  @media (max-width:800px){
    & .title{
      width:unset;
    }

    & h2 {
      margin: 0;
      margin-top: 80px;
      font-size: 24px;
    }
  
    & .featured-image {
      margin: 20px;
      }
  
    & .text-content {
      margin: 5px;
    }

  @media (max-width: 500px) {
    padding-bottom: 30px;

    & .inner-container{
      flex-direction: column;
      }

    & .text-content>span {
        height: 70px;
        width: 70px;
    }    
  }
} 
`;
