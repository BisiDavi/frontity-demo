import BigBlogCard from "./bigBlogCard";
import SmallBlogCards from "./smallBlogCard";
import Loading from "./loading";

import { connect, styled } from "frontity";

function BlogSection({ state }) {
  const data = state.source.get(state.router.link);
  const post = Object.values(state.source?.post);
  const blogPost = post.filter((post) => post.categories[0] === 273);
  const headlinePost = blogPost.filter((post) => post.tags[0] === 24931);
  const otherpost = blogPost.filter((post) => post.tags[0] !== 24931);

  return data.isReady ? (
    <Container>
      <BigBlogCard content={headlinePost} />
      <SmallBlogCards content={otherpost} />
    </Container>
  ) : (
    <Loading />
  );
}

export default connect(BlogSection);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px;

  @media (max-width: 1440px) {
    padding: 30px;
  }
`;
