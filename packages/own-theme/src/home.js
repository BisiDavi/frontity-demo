import Layout from "./layout/layout";
import HomeBanner from "./components/homeBanner";
import HomeSection1 from "./components/home-section1";
import HomeSection2 from "./components/home-section2";
import HomeSection3 from "./components/home-section3";
import HomeSection4 from "./components/home-section4";
import HomeSection5 from "./components/home-section5";

function Home() {
  return (
    <Layout>
      <HomeBanner />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </Layout>
  );
}

export default Home;
