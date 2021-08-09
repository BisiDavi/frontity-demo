import { connect, styled } from "frontity";
import colors from "../styles/colors";
import quoteIcon from "../assets/quoteIcon.png";
import testimonial0 from "../assets/testimonial0.png";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";

function HomeSection4({ state }) {
  return (
    <Container>
      <h3>TESTIMONIALS</h3>
      <InnerContainer>
        <FullTestimonial>
          <img src={quoteIcon} alt="" />
          <article>
            <img src={testimonial0} alt="testimonial0" />
            <p>
              My dad had cataract surgery from Dr. Strinden last month and it
              was so incredible. Dad doesn't normally handle surgery or doctor's
              visits well but Dr. Strinden and his staff were able make him feel
              comfortable and confident about the procedure. They are truly
              gifted! We are so grateful for Dr. Tom and his whole team.
            </p>
          </article>
        </FullTestimonial>
        <TestmonialsGroup>
          <img src={testimonial1} alt="testimonial1" />
          <p>
            “Dr. Strinden performed my LASIK surgery last month and I'm loving
            the results. I can't believe I didn't have it done sooner. Thank you
            to Dr. Tom, Melanie and the staff for an all around awesome
            experience!”
          </p>
        </TestmonialsGroup>
        <TestmonialsGroup>
          <img src={testimonial2} alt="testimonial2" />
          <p>
            “One eye 20/20 one eye to go:) in 2002 I had the lowest bidder
            attempt LASIK on my eyes. It was a place in Hawaii, and they messed
            up on both eyes unfortunately. Dr. Tom Strinden and his crew did an
            outstanding job on my left eye with PRK, cant wait to get the right
            eye done, its been un-correctable, and un-corrected for 16 yrs.”
          </p>
        </TestmonialsGroup>
        <TestmonialsGroup>
          <img src={testimonial3} alt="testimonial3" />
          <p>
            “After almost 30 years in corrective eyewear, I took the leap to get
            my vision corrected once and for all. No regrets! The entire staff
            is welcoming, and makes you comfortable throughout the entire
            process. Thank you a million times over!”
          </p>
        </TestmonialsGroup>
      </InnerContainer>
    </Container>
  );
}

export default connect(HomeSection4);

const Container = styled.section`
  background-color: ${colors.light};
  justify-content: space-around;
  align-items: center;
  display: flex;
  height: 500px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: flex;
`;

const FullTestimonial = styled.div`
  display: flex;
  flex-direction: column;

  & h4 {
    font-weight: bold;
    font-size: 20px;
  }
`;

const TestmonialsGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid black;
`;
