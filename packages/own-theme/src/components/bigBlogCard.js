import { connect, styled } from "frontity";

function BigBlogCard({ state, content, libraries }) {
  const Html2React = libraries.html2react.Component;

  return (
    <BigCard>
      {content.map((data, index) => {
        const date = new Date(data.date);
        const author = state.source.author[data.author];
        return (
          <div className="card" key={index}>
            <div className={`card-${index}`}>
              <div className="text">
                <p>{date.toDateString()}</p>
                <h1 dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
                <hr />
                <h5 dangerouslySetInnerHTML={{ __html: author.name }} />
                <Html2React html={data.content.rendered} />
              </div>
              <img src={data.jetpack_featured_media_url} alt="data.title" />
            </div>
          </div>
        );
      })}
    </BigCard>
  );
}

export default connect(BigBlogCard);

const BigCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;

  & .card > div {
    display: flex;
    align-items: center;
    margin: 20px auto;
    justify-content: center;
  }

  & .card > div.card-0 > img {
    order: 1;
  }
  & .card > div.card-0 .text {
    display: flex;
    order: 2;
    flex-direction: column;
    width: 40%;
    border-radius: 50px;
    background-color: white;
    padding: 30px;
    margin-left: -140px;
    z-index: 2;
  }

  & .card > div.card-1 .text {
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

  @media (max-width: 800px) {
    & .card > div > .text {
      width: 80%;
    }

    & .card > div {
      flex-direction: column;
      margin-bottom: 0;
    }

    & .card > div > img {
      height: 100%;
      width: 100%;
    }

    & .inverted > .text {
      order: 2;
    }

    & .inverted > img {
      order: 1;
    }

    & .card > div.inverted > .text {
      width: 100%;
      padding: 30px;
    }
  }

  @media (max-width: 500px) {
    & .card > div > .text,
    & .card > div.inverted > .text {
      width: 100%;
      margin: auto;
      padding: 0;
    }
  }
`;
