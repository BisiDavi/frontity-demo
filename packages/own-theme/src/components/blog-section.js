import SmallBlogCards, { BigBlogCard } from "./blogCards";
import blogData from "../json/blog.json";
import { styled } from "frontity";

export default function BlogSection() {
  return (
    <Container>
      <BigBlogCard content={blogData.headlines} />
      <SmallBlogCards content={blogData.allPosts} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px;

  @media (max-width: 1440px) {
    padding: 30px;
  }
`;
