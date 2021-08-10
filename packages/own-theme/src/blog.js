import Layout from "./layout/layout";
import BlogBanner from "./components/blogBanner";
import BlogBanner from "./components/blog-section";

export default function Blog() {
  return (
    <Layout>
      <BlogBanner />
      <BlogSection />
    </Layout>
  );
}
