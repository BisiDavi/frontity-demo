import ProceduresBanner from "./components/proceduresBanner";
import ProceduresSection1 from "./components/procedures-section1";
import Layout from "./layout/layout";

export default function Procedures() {
  return (
    <Layout>
      <ProceduresBanner />
      <ProceduresSection1 />
    </Layout>
  );
}
