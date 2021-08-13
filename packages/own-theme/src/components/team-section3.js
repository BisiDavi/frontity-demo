import { connect, styled } from "frontity";
import Images from "../assets/images";

function TeamSection3({ state, actions, libraries }) {
  const data = state.source.get(state.router.link);
  const items = data?.items;
  // const post = state.source[data.id]?.items;

  console.log("items", items);
  console.log("data", data);

  return (
    <Section className="bioStory">
      <div className="title">
        <hr />
        <h3>BIO STORY</h3>
      </div>
      <img src={Images.dots} alt="dots" className="dots first" />
      <div className="stories">
        <div className="story">
          <div className="author">
            <img src={Images.doctor1} alt="doctor" />
            <h4>DR STEVE BAGAN, MD</h4>
          </div>
          <div className="text">
            Dr. Bagan received his M.D. degree from Baylor College of Medicine
            in Houston, TX in 1976. He then completed his specialty training in
            Ophthalmology at the Mayo Clinic. He has had an eye surgical
            practice in Fargo since 1980. Dr. Bagan has done over 10,000 major
            eye sugeries and over 10,000 Lasik and PRK laser procedures. He is
            also a cornea transplant surgeon, giving him valuable experience in
            all aspects of cornea surgery. Dr. Bagan has had refractive surgery
            himself.
          </div>
        </div>
      </div>
      <div className="stories">
        <div className="story">
          <div className="author">
            <img src={Images.doctor2} alt="doctor" />
            <h4>DR TOM STRINDEN, MD</h4>
          </div>
          <div className="text">
            Dr. Strinden received his medical degree from the University of
            North Dakota School of Medicine in 1988. He completed his
            Ophthalmology residency at the University of Wisconsin, Madison, and
            has had an eye surgical practice in Fargo since 1995. Dr. Strinden
            has performed over 15,000 major eye surgeries. He began performing
            LASIK in 1998 and implanting multifocal implants in 1999. Dr.
            Strinden’s practice emphasis is refractive surgery and cataract
            surgery but he also offers a range of services related to general
            ophthalmology.
          </div>
        </div>
      </div>
      <div className="stories">
        <div className="story">
          <div className="author">
            <img src={Images.doctor3} alt="doctor" />
            <h4>DR SARAH SWANHOLM, MD</h4>
          </div>
          <div className="text">
            Dr. Swanholm, originally from Fargo, ND, received her undergraduate
            degree in Biology with a minor in Chemistry from the University of
            North Dakota. She went on to obtain her doctorate degree, graduating
            with honors, from Pacific University College of Optometry in Forest
            Grove, Oregon. While at Pacific University, she spent time as a
            teaching assistant, volunteered on a mission trip to El Salvador,
            and served as the Class of 2012 president. She then completed a
            hospital-based/rehabilitative optometric residency at the Kansas
            City Veterans Affairs Medical Center, specializing in ocular disease
            and low vision. Her professional areas of interest include primary
            eye care, ocular disease prevention and treatment, specialty contact
            lenses, and surgical co-management.
          </div>
        </div>
      </div>
      <img src={Images.dots} alt="dots" className="dots second" />
    </Section>
  );
}

export default connect(TeamSection3);

const Section = styled.section`
  & .stories {
    display: flex;
    justify-content: center;
    padding: 0px 40;
    align-items: center;
  }

  & .story {
    display: flex;
    width: 80%;
    margin: auto;
    background-color: #e9f1f3;
    margin: 20px;
    padding: 30px;
    border-radius: 20px;
  }
  & .story > .author {
    display: flex;
    flex-direction: column;
    margin: 0px 20px;
  }
  & .author > img {
    height: 150px;
  }

  &.text {
    line-height: 25px;
    font-size: 20px;
    font-family: "Poppins";
  }

  @media (max-width: 1280px) {
    position: relative;

    & .author > img {
      height: 100%;
      width: 100%;
    }

    & img.dots.first {
      position: absolute;
      z-index: 1;
      height: 200px;
    }

    & .stories {
      position: relative;
      z-index: 2;
      padding: 20px;
    }

    & .story {
      align-items: center;
    }

    & .text {
      width: 100%;
      line-height: 20px;
      font-size: 14px;
    }

    img.dots.second {
      position: absolute;
      right: 10px;
      bottom: 0px;
      height: 100px;
    }
  }

  @media (max-width: 500px) {
    & .title h3 {
      text-align: right;
      margin-right: 10px;
      letter-spacing: 2px;
      margin-top: 0;
    }
    & .text {
      font-size: 16px;
      line-height: 24px;
    }

    & .author > img {
      height: 50%;
      width: 50%;
      margin: auto;
    }

    & .story {
      margin: 0px;
      flex-direction: column;
      text-align: center;
    }
  }
`;
