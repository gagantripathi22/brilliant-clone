import HeaderNavButton from "./HeaderNavButton";
import Searchbar from "./Searchbar";
import HomeIcon from "../assets/home.png";
import CoursesIcon from "../assets/courses.png";
import PremiumSubButton from "./PremiumSubButton";
import StreakCounter from "./StreakCounter";
import MenuButton from "./MenuButton";
import { Link, useLocation } from "react-router-dom";

const DashboardHeader = () => {
  const location = useLocation();

  return (
    <div className="w-full shadow-md px-5">
      <div className="max-w-screen-xl flex flex-row h-16 justify-between items-center">
        <div className="flex flex-row m-0 h-full flex items-center">
          <Link to="/">
            <h1 className="text-black text-4xl font-bold">Brilliant</h1>
          </Link>
          <div className="flex flex-row h-full ml-10">
            <Link to="/dashboard">
              <HeaderNavButton current={location.pathname === '/dashboard'} text="Home" icon={HomeIcon} onClick={() => {}} />
            </Link>
            <Link to="/courses">
              <HeaderNavButton
                current={location.pathname === '/courses'}
                text="Courses"
                icon={CoursesIcon}
                onClick={() => {}}
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex flex-row h-full mr-0 items-center">
          <Searchbar onClick={() => {}} />
          <PremiumSubButton />
          <StreakCounter />
          <MenuButton />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
