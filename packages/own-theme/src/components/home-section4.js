import { connect, styled } from "frontity";
import quoteIcon from "../assets/quoteIcon.png";
import testimonial0 from "../assets/testimonial0.png";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";

function HomeSection4({ state }) {
  return (
    <Container>
      <h3>TESTIMONIALS</h3>
      <div className="inner-container">
        <div className="full-testimonial">
          <img src={testimonial0} alt="testimonial0" />
          <h3>Ann Tsvetaeva</h3>
          <div className="text">
            <img src={quoteIcon} alt="" />
            <article>
              <p>
                My dad had cataract surgery from Dr. Strinden last month and it
                was so incredible. Dad doesn't normally handle surgery or
                doctor's visits well but Dr. Strinden and his staff were able
                make him feel comfortable and confident about the procedure.
                They are truly gifted! We are so grateful for Dr. Tom and his
                whole team.
              </p>
            </article>
          </div>
        </div>
        <div className="column">
          <div className="testimonial-group">
            <img src={testimonial1} alt="testimonial1" />
            <p>
              “Dr. Strinden performed my LASIK surgery last month and I'm loving
              the results. I can't believe I didn't have it done sooner. Thank
              you to Dr. Tom, Melanie and the staff for an all around awesome
              experience!”
            </p>
          </div>
          <div className="testimonial-group">
            <img src={testimonial2} alt="testimonial2" />
            <p>
              “One eye 20/20 one eye to go:) in 2002 I had the lowest bidder
              attempt LASIK on my eyes. It was a place in Hawaii, and they
              messed up on both eyes unfortunately. Dr. Tom Strinden and his
              crew did an outstanding job on my left eye with PRK, cant wait to
              get the right eye done, its been un-correctable, and un-corrected
              for 16 yrs.”
            </p>
          </div>
          <div className="testimonial-group">
            <img src={testimonial3} alt="testimonial3" />
            <p>
              “After almost 30 years in corrective eyewear, I took the leap to
              get my vision corrected once and for all. No regrets! The entire
              staff is welcoming, and makes you comfortable throughout the
              entire process. Thank you a million times over!”
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default connect(HomeSection4);

const Container = styled.section`
    justify-content: center;
    align-items: center;
    display: flex;
    height: 500px;
    padding: 100px 200px;
    flex-direction: column;

  & h3 {
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 500;
  }

  & .inner-container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: flex;
  }
  
  & .full-testimonial{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
 & .full-testimonial >  img{
    margin:auto;
  }

  & .full-testimonial > h3 {
    font-weight: bold;
    text-align:center
    font-size: 20px;
  }

  & .testimonial-group {
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid black;
  }
  
  & .testimonial-group > img {
    margin: 0px 20px;
  }

  & .text {
    display: flex;
    align-items: flex-start;
    width: 80%;
    justify-content: center;
  }
  
  & article {
    margin: 0px 20px;
  }

  & article p {
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    font-family: "Open Sans";
  }

  & .text img {
    margin: unset;
  }

  & .column {
    flex-direction: column;
  }

  @media (max-width:1000px){
    padding: 0px;

    .column{
      display: none;
    }
  }

  @media (max-width:800px){
    & h3 {
    font-size: 24px;
    margin: 40px auto;
    }
  }
  @media (max-width:500px){
    height: unset;
    padding-bottom: 30px;
    
    & h3 {
        margin: 10px 0px;
        font-size: 20px;
    }
    
    & article p {
    font-size: 15px;
    line-height: 22px;
    }
    & .full-testimonial > h3 {
    margin: 10px 0px;
    font-size: 18px;
    }

  }
`;
