import { connect } from "frontity";
import ContactLens from "./contact-lens";
import Blog from "./blog";
import Home from "./home";
import Procedures from "./procedures";
import ClinicalTrials from "./clinical-trials";
import Scheduleconsultation from "./schedule-consultation";
import Loading from "./components/loading";

function Main({ state }) {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Switch>
        <Loading when={data.isFetching} />
        <Home />
        <Procedures />
        <Blog />
        <ContactLens />
        <ClinicalTrials />
        <Scheduleconsultation />
      </Switch>
    </>
  );
}

export default connect(Main);
