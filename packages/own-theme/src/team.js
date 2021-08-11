import Layout from "./layout/layout";
import TeamBanner from "./components/teamBanner";
import TeamSection1 from "./components/team-section1";
import Teamsection2 from "./components/team-section2";
import TeamSection3 from "./components/team-section3";

export default function Team() {
  return (
    <Layout>
      <TeamBanner />
      <TeamSection1 />
      <Teamsection2 />
      <TeamSection3 />
    </Layout>
  );
}
