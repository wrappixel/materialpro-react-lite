import  { ReactComponent as LogoDark1 } from "../assets/images/logos/materialpro.svg";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <LogoDark1 />
    </Link>
  );
};

export default Logo;
