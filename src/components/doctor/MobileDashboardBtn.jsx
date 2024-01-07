import { useRef, useState } from "react";
import {
  CalenderSvg,
  CreateBoxSvg,
  OpenEyeSvg,
  ThreeDotsSvg,
} from "../../assets/svgs";

const MobileDashboardBtn = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  return (
    <div className="relative z-9 list-none">
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-black-4 bg-black-5 text-black-3 hover:text-primary dark:border-black-3 dark:bg-black-2"
      >
        <span className="text-black-3">
          <ThreeDotsSvg />
        </span>
      </button>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`h-37 absolute right-0 mt-7 flex w-75 flex-col overflow-hidden rounded-md  border border-black-5 bg-white shadow-default dark:border-black-3 dark:bg-black sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-md font-semibold text-black-2 dark:text-black-4">
            Action Buttons
          </h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <button className="flex w-full items-center gap-2 border-t border-black-5 px-4.5 py-3 text-black-3 dark:border-black-3">
              <span className="scale-[0.9] text-black-3">
                <CalenderSvg />
              </span>
              Appointments
            </button>
          </li>
          <li>
            <button className="flex w-full items-center gap-2 border-t border-black-5 px-4.5 py-3 text-black-3 dark:border-black-3">
              <span className="scale-[0.8] text-black-3">
                <OpenEyeSvg />
              </span>
              View Consultations
            </button>
          </li>
          <li>
            <button className="flex w-full items-center gap-2 border-t border-black-5 px-4.5 py-3 text-black-3 dark:border-black-3">
              <span className="scale-[0.8] text-black-3">
                <CreateBoxSvg />
              </span>
              Create Consultations
            </button>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default MobileDashboardBtn;
