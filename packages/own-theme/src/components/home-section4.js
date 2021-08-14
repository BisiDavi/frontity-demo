import { useState, useEffect } from "react";
import { connect, styled } from "frontity";
import quoteIcon from "../assets/quoteIcon.png";
import Loading from "./loading";

function HomeSection4({ libraries }) {
  const Html2React = libraries.html2react.Component;

  const [postData, setPostData] = useState(null);

  async function fetchTestimonials() {
    const data = await libraries.source.api.get({
      endpoint: "posts",
      params: { _embed: true, categories: "26382" },
    });
    const response = data.json();
    response.then((result) => {
      setPostData(result);
    });
  }

  useEffect(() => {
    fetchTestimonials();
  }, []);

  let mainTestimonial, otherTestimonials;
  if (postData !== null && postData !== undefined) {
    mainTestimonial = postData.filter((f) => f.tags[0] === 231502154);
    otherTestimonials = postData.filter((f) => f.tags[0] !== 231502154);
  }

  console.log("mainTestimonial", mainTestimonial);
  console.log("otherTestimonials", otherTestimonials);

  return postData !== null && postData !== undefined ? (
    <Container>
      <h3>TESTIMONIALS</h3>
      <div className="inner-container">
        <div className="full-testimonial">
          <img
            src={mainTestimonial[0]?.jetpack_featured_media_url}
            alt="testimonial"
          />
          <h3
            dangerouslySetInnerHTML={{
              __html: mainTestimonial[0].title.rendered,
            }}
          />
          <div className="text">
            <img src={quoteIcon} alt="" />
            <article>
              <Html2React html={mainTestimonial[0].content.rendered} />
            </article>
          </div>
        </div>
        <div className="column">
          {otherTestimonials.map((content, index) => (
            <div key={index} className="testimonial-group">
              <img
                src={content.jetpack_featured_media_url}
                alt="testimonial1"
              />
              <Html2React html={content.content.rendered} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  ) : (
    <Loading />
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
