import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { doctorIconImg, frontDeskIconImg, medicineIconImg } from "../../assets";

const roles = [
  { name: "Doctor", navigateTo: "/add-doctors", img: doctorIconImg },
  {
    name: "Receptionist",
    navigateTo: "/add-receptionists",
    img: frontDeskIconImg,
  },
  {
    name: "Pharmacist",
    navigateTo: "/add-pharmacists",
    img: medicineIconImg,
  },
];

const GridIconDropDown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = (event) => {
      const target = event.target;
      if (!dropdown.current) return;

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
    <>
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`group mr-6 flex h-[45px] w-[45px] items-center justify-center rounded-full dark:bg-black-2 ${
          dropdownOpen ? "bg-[#A7DFFF80]" : "bg-black-5"
        } pl-[1px] pt-[2px] transition-six-all hover:bg-[#A7DFFF80]`}
      >
        <div className="grid grid-cols-[repeat(3,8px)] grid-rows-[repeat(3,8px)] gap-0">
          {Array.from({ length: 9 }).map((_item, i) => (
            <div
              className={`h-[6px] w-[6px] rounded-full dark:bg-white bg-${
                dropdownOpen ? "primary" : "black-3"
              } transition-three-all group-hover:bg-primary `}
              key={i}
            ></div>
          ))}
        </div>
      </button>

      {/* <!-- Dropdown Start --> */}

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`dark:border-strokedark absolute right-[5%] top-20 flex flex-col  rounded-b-md border border-black-5 bg-white shadow-default dark:border-black-2 dark:bg-black ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="  flex  border-black-5 px-4 py-5 dark:border-black-2">
          {roles.map((role, index) => (
            <li key={index}>
              <Link
                to={role.navigateTo}
                className={`block items-center  ${
                  index !== 2 && `border-r-[1px]`
                } border-r-black-4 px-4  text-sm font-medium text-black-3 duration-300 ease-in-out hover:text-primary lg:text-base`}
              >
                <figure>
                  <img src={role.img} alt="doctor-icon" />
                </figure>
                <p className="mt-2 text-center">{role.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </>
  );
};

export default GridIconDropDown;
