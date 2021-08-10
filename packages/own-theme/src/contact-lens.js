import ContactLensSections from "./components/contactLens-sections";
import ContactLensBanner from "./components/contactLensBanner";
import Layout from "./layout/layout";

export default function ContactLens() {
  return (
    <Layout>
      <ContactLensBanner />
      <ContactLensSections />
    </Layout>
  );
}
