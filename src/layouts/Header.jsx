import { Link, Outlet } from "react-router-dom";
import { loginLogo } from "../assets";

const Header = () => {
  return (
    <>
      <header className="px-[4%] py-2 absolute top-0">
        <Link to={"/"}>
          <img src={loginLogo} className="w-[140px]" alt="prescribe-me" />
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
