import LoginButton from "./LoginButton";
import { Link, useLocation } from "react-router-dom";

const LandingHeader = () => {
  const location = useLocation();
  return (
    <div className="max-w-screen-xl flex flex-row h-24 justify-between items-center px-5">
      <Link to="/" className="m-0">
        <h1 className="text-black text-4xl font-bold">Brilliant</h1>
      </Link>
      {location.pathname === "/" && (
        <Link to="/signUp" className="m-0">
          <LoginButton />
        </Link>
      )}
    </div>
  );
};

export default LandingHeader;
