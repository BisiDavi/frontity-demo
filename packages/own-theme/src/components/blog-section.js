import SmallBlogCards, { BigBlogCard } from "./blogCards";
import blogData from "../json/blog.json";

export default function BlogSection() {
  return (
    <>
      <BigBlogCard content={blogData.headlines} />
      <SmallBlogCards content={blogData.allPosts} />
    </>
  );
}
