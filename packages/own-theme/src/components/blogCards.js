import { styled } from "frontity";
import Images from "../assets/images";

function displayImage(image) {
  switch (image) {
    case "blogImg1":
      return Images.blogImg1;
    case "blogImg2":
      return Images.blogImg2;
    case "blog1":
      return Images.blog1;
    case "blog2":
      return Images.blog2;
    case "blog3":
      return Images.blog3;
    case "blog4":
      return Images.blog4;
    case "blog5":
      return Images.blog5;
    case "blog6":
      return Images.blog6;
    default:
      return null;
  }
}

export function BigBlogCard({ content }) {
  return (
    <BigCard>
      {content.map((data, index) => (
        <div className="card" key={index}>
          {data.inverted ? (
            <div className="inverted">
              <div className="text">
                <p>{data.date}</p>
                <h1>{data.title}</h1>
                <hr />
                <h5>{data.author}</h5>
                <p>{data.text}</p>
              </div>
              <img src={displayImage(data.img)} alt={data.title} />
            </div>
          ) : (
            <div>
              <img src={displayImage(data.img)} alt={data.title} />
              <div className="text">
                <p>{data.date}</p>
                <h1>{data.title}</h1>
                <hr />
                <h5>{data.author}</h5>
                <p>{data.text}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </BigCard>
  );
}

const BigCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & .card > div {
    display: flex;
    align-items: center;
    margin: 20px auto;
    justify-content: center;
  }

  & .card > div .text {
    display: flex;
    flex-direction: column;
    width: 40%;
    border-radius: 50px;
    background-color: white;
    padding: 30px;
    margin-left: -140px;
    z-index: 2;
  }

  & .card > div.inverted .text {
    display: flex;
    flex-direction: column;
    width: 40%;
    border-radius: 20px;
    background-color: white;
    padding: 30px;
    margin-right: -140px;
    z-index: 2;
  }

  & .card > div {
    display: flex;
  }

  & .card > img {
    z-index: 1;
  }

  & .text p {
    font-size: 20px;
    line-height: 25px;
  }

  * .text h5 {
    margin: 0px;
    font-size: 20px;
  }
  & .text h1 {
    margin: 0px;
    line-height: 20px;
    font-size: 25px;
  }
`;

export default function SmallBlogCards({ content }) {
  return (
    <SmallCard>
      {content.map((data, index) => (
        <div className="blog-card" key={index}>
          <img src={displayImage(data.img)} alt={data.title} />
          <div>
            <h1>{data.title}</h1>
            <p>{data.text}</p>
          </div>
        </div>
      ))}
    </SmallCard>
  );
}

const SmallCard = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  & .blog-card {
    flex-direction: column;
  }
`;
