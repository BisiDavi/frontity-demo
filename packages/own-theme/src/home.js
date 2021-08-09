import { Global, css, Head, connect } from "frontity";

import Layout from "./layout/layout";
import Title from "./components/title";
import HomeBanner from "./components/homeBanner";

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
