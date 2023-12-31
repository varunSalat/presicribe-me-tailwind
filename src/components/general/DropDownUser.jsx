import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ContactSvg,
  LogoutSvg,
  SettingGearSvg,
  UserSvg,
} from "../../assets/svgs";

const DropDownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = (event) => {
      const target = event.target;
      if (!dropdown.current || !trigger.current) return;

      // Check if the click is outside the dropdown and trigger
      if (
        dropdownOpen &&
        !dropdown.current.contains(target) &&
        !trigger.current.contains(target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  // Close if the Esc key is pressed
  useEffect(() => {
    const keyHandler = (event) => {
      if (!dropdownOpen || event.keyCode !== 27) return;
      setDropdownOpen(false);
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4 text-black-3"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="text-md block  text-black-2 dark:text-white">
            Dr. Varun Salat
          </span>
          <span className="block text-xs dark:text-black-5">Physician</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img
            src={"https://prescribe-me.netlify.app/assets/user-01-b007ff3f.png"}
            alt="User"
          />
        </span>

        <svg
          className={`hidden fill-current transition-six-all sm:block ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-b-md border border-black-5 bg-white shadow-default dark:border-black-2 dark:bg-black ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="  flex flex-col gap-5 border-b border-black-5 px-6 py-7.5 dark:border-black-2">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium text-black-3 duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <UserSvg />
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center gap-3.5 text-sm font-medium text-black-3 duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <ContactSvg />
              My Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center gap-3.5 text-sm font-medium text-black-3 duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <SettingGearSvg />
              Account Settings
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium text-black-3 duration-300 ease-in-out hover:text-danger lg:text-base">
          <LogoutSvg />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropDownUser;
