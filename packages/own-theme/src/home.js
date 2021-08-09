import { Global, css, Head, connect } from "frontity";

import Layout from "./layout/layout";
import Title from "./components/title";
import HomeBanner from "./components/homeBanner";
import HomeSection1 from "./components/home-section1";
import HomeSection2 from "./components/home-section2";
import HomeSection3 from "./components/home-section3";
import HomeSection4 from "./components/home-section4";
import HomeSection5 from "./components/home-section5";

function Home({ state }) {
  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>
      <Global styles={globalStyles} />
      <Layout>
        <HomeBanner />
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
      </Layout>
    </>
  );
}

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export default connect(Home);
