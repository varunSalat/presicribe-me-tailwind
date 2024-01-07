import { NavLink, useLocation } from "react-router-dom";
import { sidebarDarkThemeLogo, sidebarLightThemeLogo } from "../../assets";
import {
  ChartSvg,
  DashboardSvg,
  ExternalListSvg,
  PatientSvg,
  RupeesSvg,
  StethoscopeSvg,
} from "../../assets/svgs";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDoctorSidebar,
  selectAllDoctorGeneralStates,
} from "../../store/features/doctorModuleSlices/doctorGeneralSlice";

const DoctorSidebar = () => {
  const { sidebarOpen, lightTheme } = useSelector(selectAllDoctorGeneralStates);
  const dispatch = useDispatch();

  const location = useLocation().pathname;
  const pathname = location.split("/");

  const menuNavLinks = [
    {
      name: "Dashboard",
      link: "doctor",
      icon: DashboardSvg,
    },
    {
      name: "Patients",
      link: "patients",
      icon: PatientSvg,
    },
    {
      name: "Revenue",
      link: "revenue",
      icon: RupeesSvg,
    },
    {
      name: "Fellow Doctors",
      link: "fellow-doctors",
      icon: StethoscopeSvg,
    },
    {
      name: "Feature Request",
      link: "request-feature",
      icon: ExternalListSvg,
    },
  ];

  return (
    <>
      <aside
        //   ref={sidebar}
        className={`absolute left-0 top-0 z-10 flex h-screen w-60 transition-six-all dark:bg-black ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:border dark:border-r-black-2 xl:static xl:translate-x-0`}
      >
        <button
          className="absolute right-0 top-6 block px-1 text-danger xl:hidden"
          onClick={() => dispatch(closeDoctorSidebar())}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
            <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
          </svg>
        </button>
        {/* <!-- SIDEBAR HEADER --> */}
        <NavLink className={"mx-5 my-4 block"}>
          {lightTheme ? (
            <img src={sidebarLightThemeLogo} alt="Logo" />
          ) : (
            <img src={sidebarDarkThemeLogo} alt="Logo" />
          )}
        </NavLink>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar mt-4 flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="px-4 lg:mt-7 lg:px-4">
            {/* <!-- Menu Group --> */}
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-black-3">
                MENU
              </h3>

              <ul className="mb-6 flex flex-col gap-2">
                {/* <!-- Menu Item Dashboard --> */}
                {menuNavLinks.map((nav, index) => (
                  <li key={index}>
                    <NavLink
                      to={index === 0 ? `/${nav.link}` : nav.link}
                      className={` group  relative flex items-center gap-2.5 rounded-md px-4  py-2  transition-three-all dark:hover:bg-black-2  ${
                        pathname[pathname.length - 1] === nav.link
                          ? "dark:bg-meta-4 bg-primary text-white"
                          : "text-black-3 hover:bg-black-5"
                      }`}
                    >
                      {<nav.icon />}
                      {nav.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-black-3">
                ANALYTICS
              </h3>

              <ul className="mb-6 flex flex-col gap-1.5">
                {/* <!-- Menu Item Chart --> */}
                <li>
                  <NavLink
                    to="/chart"
                    className={`text-body dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-black-3  transition-three-all hover:bg-black-5 dark:hover:bg-black-2 ${
                      pathname.includes("chart")
                        ? "dark:bg-meta-4 bg-primary text-white"
                        : "hover:bg-black-5"
                    }`}
                  >
                    <ChartSvg />
                    Chart
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </>
  );
};

export default DoctorSidebar;
