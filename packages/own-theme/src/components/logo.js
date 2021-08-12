import { connect } from "frontity";
import logo from "../assets/logo.png";
import Link from "./link";

function Logo({ state }) {
  return (
    <Link link={state.theme.logo.link}>
      <img src={logo} alt="logo"  width="200px" />
    </Link>
  );
}

export default connect(Logo);
