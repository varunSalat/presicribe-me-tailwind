import { Link, NavLink } from "react-router-dom";
import { logoIconImg } from "../../assets";
import { CalenderSvg, OpenEyeSvg, CreateBoxSvg } from "../../assets/svgs";
import { DarkModeSwitcher, DropDownUser } from "../general";
import GridIconDropDown from "./GridIconDropDown";
import { useDispatch } from "react-redux";
import { openDoctorSidebar } from "../../store/features/doctorModuleSlices/doctorGeneralSlice";
const topNavbarLinks = [
  {
    label: "Appointments",
    icon: CalenderSvg,
    navigateTo: "/appoitments",
  },
  {
    label: "View Consultations",
    icon: OpenEyeSvg,
    navigateTo: "/view-consultations",
  },
  {
    label: "Create Consultations",
    icon: CreateBoxSvg,
    navigateTo: "/create-consultations",
  },
];

const DoctorTopNavbar = () => {
  const dispatch = useDispatch();
  return (
    <header className="fixed left-0 top-0 z-9 flex w-full  bg-white drop-shadow-1 dark:border  dark:border-b-black-2 dark:bg-black dark:drop-shadow-none md:static">
      <div className="flex flex-grow items-center  justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 xl:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={() => dispatch(openDoctorSidebar())}
            className=" dark:border-strokedark dark:bg-boxdark block h-[40px] w-[40px] rounded-md border border-black-4 bg-white px-1 shadow-sm dark:bg-black xl:hidden "
          >
            {Array.from({ length: 3 }).map((_item, i) => (
              <div
                key={i}
                className="my-[7px] h-[3px] w-full rounded-md bg-black dark:bg-white"
              ></div>
            ))}
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 xl:hidden" to="/">
            <img src={logoIconImg} className="w-10" alt="Logo" />
          </Link>
        </div>
        <div className="block xl:hidden"></div>
        <div className="hidden xl:block">
          <div className="flex items-center gap-6">
            {topNavbarLinks.map((link, index) => (
              <NavLink
                key={index}
                to="/"
                className="group flex gap-2 align-middle  text-black-3  transition-three-all hover:text-black dark:text-black-4 dark:hover:text-white"
              >
                <div
                  className={`${
                    index === 1 && "mt-1"
                  } text-black-4 transition-three-all group-hover:text-black dark:text-white dark:group-hover:text-white`}
                >
                  {<link.icon />}
                </div>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="2xsm:gap-7 flex items-center gap-3">
          <ul className="2xsm:gap-4 flex items-center gap-6">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            {/* <DropdownNotification /> */}
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            <GridIconDropDown />
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropDownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default DoctorTopNavbar;
