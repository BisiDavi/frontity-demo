import { Head, connect } from "frontity";

import Layout from "./layout/layout";
import HomeBanner from "./components/homeBanner";
import HomeSection1 from "./components/home-section1";
import HomeSection2 from "./components/home-section2";
import HomeSection3 from "./components/home-section3";
import HomeSection4 from "./components/home-section4";

function Home({ state }) {
  return (
    <>
      <Head>
        <meta name="description" content={state.frontity.description} />
      </Head>
      <Layout>
        <HomeBanner />
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
      </Layout>
    </>
  );
}

export default connect(Home);
