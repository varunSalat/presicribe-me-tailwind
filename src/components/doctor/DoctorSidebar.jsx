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
} from "../../store/features/doctorModuleSlices/DoctorGeneralSlice";

const DoctorSidebar = () => {
  const { sidebarOpen } = useSelector(selectAllDoctorGeneralStates);
  const dispatch = useDispatch();

  const location = useLocation().pathname;
  const pathname = location.split("/");

  const theme = "dark";
  return (
    <>
      <aside
        //   ref={sidebar}
        className={`absolute left-0 top-0 z-9999 flex h-screen w-60 transition-six-all dark:bg-black ${
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
        <NavLink to="/" className={"mx-5 my-4 block"}>
          {theme == "light" ? (
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
                <li>
                  <NavLink
                    to="/"
                    className={`text-body  dark:text-bodydark1 group  relative flex items-center gap-2.5 rounded-md px-4  py-2 text-black-3 transition-three-all dark:hover:bg-black-2  ${
                      pathname === "/" || pathname.includes("doctor")
                        ? "dark:bg-meta-4 bg-primary text-white"
                        : "text-black-3 hover:bg-black-5"
                    }`}
                  >
                    <DashboardSvg />
                    Dashboard
                  </NavLink>
                </li>
                {/* <!-- Menu Item Calendar --> */}
                <li>
                  <NavLink
                    to="/calendar"
                    className={`text-body dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-black-3 transition-three-all dark:hover:bg-black-2   ${
                      pathname.includes("calendar")
                        ? "dark:bg-meta-4 bg-primary text-white"
                        : "hover:bg-black-5"
                    }`}
                  >
                    <PatientSvg />
                    Patients
                  </NavLink>
                </li>
                {/* <!-- Menu Item Calendar --> */}

                {/* <!-- Menu Item Profile --> */}
                <li>
                  <NavLink
                    to="/profile"
                    className={`text-body dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-black-3 transition-three-all hover:bg-black-5 dark:hover:bg-black-2 ${
                      pathname.includes("profile")
                        ? "dark:bg-meta-4 bg-primary text-white"
                        : "hover:bg-black-5"
                    }`}
                  >
                    <RupeesSvg />
                    Revenue
                  </NavLink>
                </li>
                {/* <!-- Menu Item Profile --> */}

                {/* <!-- Menu Item Tables --> */}
                <li>
                  <NavLink
                    to="/tables"
                    className={`text-body dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-black-3 transition-three-all hover:bg-black-5 dark:hover:bg-black-2 ${
                      pathname.includes("tables")
                        ? "dark:bg-meta-4 bg-primary text-white"
                        : "hover:bg-black-5"
                    }`}
                  >
                    <StethoscopeSvg />
                    Fellow Doctors
                  </NavLink>
                </li>
                {/* <!-- Menu Item Tables --> */}

                {/* <!-- Menu Item Settings --> */}
                <li>
                  <NavLink
                    to="/settings"
                    className={`text-body dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-black-3  transition-three-all hover:bg-black-5 dark:hover:bg-black-2 ${
                      pathname.includes("settings")
                        ? "dark:bg-meta-4 bg-primary text-white"
                        : "hover:bg-black-5"
                    }`}
                  >
                    <ExternalListSvg />
                    Request Feature
                  </NavLink>
                </li>
                {/* <!-- Menu Item Settings --> */}
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
