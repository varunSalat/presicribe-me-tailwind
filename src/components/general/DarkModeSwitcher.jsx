import { useDispatch, useSelector } from "react-redux";

import { MoonIconSvg, SunIconSvg } from "../../assets/svgs";
import {
  changeDoctorTheme,
  selectAllDoctorGeneralStates,
} from "../../store/features/doctorModuleSlices/doctorGeneralSlice";

const DarkModeSwitcher = () => {
  const dispatch = useDispatch();
  const { lightTheme } = useSelector(selectAllDoctorGeneralStates);

  return (
    <>
      <li>
        <label
          className={`relative m-0 block h-7.5 w-14 rounded-full ${
            lightTheme === false ? "bg-primary" : "bg-black-5"
          }`}
        >
          <input
            type="checkbox"
            onChange={() => {
              dispatch(changeDoctorTheme(!lightTheme));
            }}
            value={lightTheme}
            className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
          />
          <span
            className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
              lightTheme === false && "!right-[3px] !translate-x-full"
            }`}
          >
            <span className="dark:hidden">
              <SunIconSvg />
            </span>
            <span className="hidden dark:inline-block">
              <MoonIconSvg />
            </span>
          </span>
        </label>
      </li>
    </>
  );
};

export default DarkModeSwitcher;
