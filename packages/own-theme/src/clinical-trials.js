import ClinicalSection1 from "./components/clinical-section1";
import ClinicalBanner from "./components/clinicalBanner";
import Layout from "./layout/layout";

export default function ClinicalTrials() {
  return (
    <Layout>
      <ClinicalBanner />
      <ClinicalSection1 />
    </Layout>
  );
}
