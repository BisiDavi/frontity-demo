import { Global, css, Head, connect } from "frontity";
import Switch from "@frontity/components/switch";

import Title from "./components/title";
import ContactLens from "./contact-lens";
import Blog from "./blog";
import Home from "./home";
import Procedures from "./procedures";
import ClinicalTrials from "./clinical-trials";
import Scheduleconsultation from "./schedule-consultation";
import Loading from "./components/loading";
import PageError from "./components/page-error";
import Team from "./team";

function Main({ state }) {
  const data = state.source.get(state.router.link);

  console.log("data", data);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500"
          rel="stylesheet"
        />
      </Head>

      <Global styles={globalStyles} />
      <Switch>
        <Loading when={data.isFetching} />
        <Procedures when={data.route === "/category/procedures/"} />
        <Team when={data.route === "/category/our-team/"} />
        <Blog when={data.route === "/category/blog/"} />
        <ContactLens when={data.route === "/category/contact-lens/"} />
        <ClinicalTrials when={data.route === "/category/clinical-trials/"} />
        <Scheduleconsultation
          when={data.route === "/category/schedule-consultation/"}
        />
        <PageError when={data.isError} />
        <Home when={data.isHome} />
      </Switch>
    </>
  );
}

export default connect(Main);

const globalStyles = css`
  body {
    margin: 0;
    font-family: "Open Sans" "Poppins", sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
