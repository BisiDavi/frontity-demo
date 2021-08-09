import Header from "../components/header";
import Footer from "../components/footer";
import { styled } from "frontity";

export default function Layout({ children }) {
  return (
    <Applayout className="layout">
      <Header />
      {children}
      <Footer />
    </Applayout>
  );
}

const Applayout = styled.div`
  padding: 0;
  margin: 0;
`;
