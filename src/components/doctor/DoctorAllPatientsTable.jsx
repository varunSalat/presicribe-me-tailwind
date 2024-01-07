import { useState } from "react";
import { Breadcrumb, ToggleBtn } from "../general";
import Select from "react-select";
import {
  BinFilledSvg,
  ChevronDownSvg,
  ChevronLeftSvg,
  ChevronRightSvg,
  CrossIconSvg,
  PenSvg,
  SearchIconSvg,
} from "../../assets/svgs";

// const filterBtns = [
//   {
//     name: "All",
//     totalCount: "2.1k",
//     bgColor: "bg-[#8a8a8a]",
//     bgActiveColor: "bg-[#000]",
//   },
//   {
//     name: "In OPD",
//     totalCount: "1k",
//     bgColor: "bg-[#ff563029]",
//     bgActiveColor: "bg-[#ff5630]",
//   },
//   {
//     name: "Out OPD",
//     totalCount: "1.1k",
//     bgColor: "bg-[#ffab0029]",
//     bgActiveColor: "bg-[#ffab0029]",
//   },
// ];

const options = [
  { value: "amit", label: "Dr. Amit" },
  { value: "sneha", label: "Dr. Sneha" },
  { value: "arjun", label: "Dr. Arjun" },
];

const DoctorAllPatientsTable = () => {
  const [activeFilterTab, setActiveFilterTab] = useState(0);
  const [perPageOptionClicked, setPerPageOptionClicked] = useState(false);
  const handleTabFilter = (index) => {
    setActiveFilterTab(index);
  };

  return (
    <div className="no-scrollbar w-full  overflow-x-hidden">
      <div className="">
        <h3 className="text-2xl"> All Patients</h3>
      </div>
      <div className="my-4">
        <Breadcrumb />
      </div>
      <div className="mb-12 rounded-lg border-[1px] border-black-5 bg-white py-2 shadow-card ">
        <div className="border-b-[1px] border-black-5 pl-4">
          <ul
            className="-mb-px flex flex-wrap gap-6 text-center text-sm font-medium"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`mt-2 inline-block px-1 pb-2 font-semibold text-black-3 ${
                  activeFilterTab === 0 ? "border-b-2" : ""
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => handleTabFilter(0)}
              >
                All
                <span
                  className={`ml-2 inline-block rounded-md  px-2 py-[2px] text-white ${
                    activeFilterTab === 0 ? "bg-[#212b36]" : "bg-[#54606c]"
                  }`}
                >
                  1k
                </span>
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`mt-2 inline-block px-1 pb-2 font-semibold text-black-3 ${
                  activeFilterTab === 1 ? "border-b-2" : ""
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => handleTabFilter(1)}
              >
                In OPD
                <span
                  className={`ml-2 inline-block rounded-md  px-2 py-[2px]  ${
                    activeFilterTab === 1
                      ? "bg-[#22c55e] text-white"
                      : "bg-[#22c55e29] text-[#118d57]"
                  } `}
                >
                  600
                </span>
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`mt-2 inline-block px-1 pb-2 font-semibold text-black-3 ${
                  activeFilterTab === 2 ? "border-b-2" : ""
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => handleTabFilter(2)}
              >
                Out OPD
                <span
                  className={`ml-2 inline-block rounded-md  px-2 py-[2px]  ${
                    activeFilterTab === 2
                      ? "bg-[#ff5630] text-white"
                      : "bg-[#ff563029] text-[#b71d18]"
                  } `}
                >
                  400
                </span>
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`mt-2 inline-block px-1 pb-2 font-semibold text-black-3 ${
                  activeFilterTab === 3 ? "border-b-2" : ""
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => handleTabFilter(3)}
              >
                Pending
                <span
                  className={`ml-2 inline-block rounded-md  px-2 py-[2px]  ${
                    activeFilterTab === 3
                      ? "bg-[#ffab00] text-white"
                      : "bg-[#ffab0029] text-[#ffab00]"
                  } `}
                >
                  200
                </span>
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`mt-2 inline-block px-1 pb-2 font-semibold text-black-3 ${
                  activeFilterTab === 4 ? "border-b-2" : ""
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={() => handleTabFilter(4)}
              >
                Complete
                <span
                  className={`ml-2 inline-block rounded-md  px-2 py-[2px]  ${
                    activeFilterTab === 4
                      ? "bg-[#212b36] text-white"
                      : "bg-[#919eab29] to-black-3"
                  } `}
                >
                  200
                </span>
              </button>
            </li>
          </ul>
        </div>
        {/* !SEARCH BAR */}
        <div className="my-4 mb-0 px-4 py-2">
          <div className="flex items-center gap-4">
            <Select
              // value={selectedOption}
              // onChange={this.handleChange}
              options={options}
              isMulti
              className=" h-[40px] w-[400px] border-black-5 outline-none"
            />
            <div className="relative flex w-full rounded-md border-[1px] border-black-5 px-2 py-[0.45em]">
              <div className="mr-2 scale-[0.8] text-black-4 ">
                <SearchIconSvg />
              </div>

              <input
                type="text"
                name=""
                id=""
                placeholder="Search..."
                className="w-full border-none text-black-3 outline-none"
              />
            </div>
          </div>
        </div>
        {/* SEARCHED INPUTS */}
        <div className="px-4">
          <p>
            0 <span className="text-black-3">results found</span>
          </p>
          {/* !FILTER BY DOCTOR NAME */}
          <div className="my-1 mt-3 flex gap-4">
            <div className="flex w-fit items-center gap-2 rounded-md border-[1px] border-dashed border-black-4 p-1">
              <p>Doctor:</p>
              <div className="flex gap-2">
                {Array.from({ length: 2 }).map((_item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-md bg-black-2 px-2 text-white"
                  >
                    <p>Mohan Shah</p>
                    <button className="h-4 w-4 rounded-full bg-black-3">
                      <CrossIconSvg />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* !FILTER BY KEYWORD */}

            <div className="flex w-fit items-center gap-2 rounded-md border-[1px] border-dashed border-black-4 p-1">
              <p>Keyword:</p>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 rounded-md bg-black-2 px-2 text-white">
                  <p>Kapil</p>
                  <button className="h-4 w-4 rounded-full bg-black-3">
                    <CrossIconSvg />
                  </button>
                </div>
              </div>
            </div>
            {/* !FILTER BY STATUS */}

            <div className="flex w-fit items-center gap-2 rounded-md border-[1px] border-dashed border-black-4 p-1">
              <p>Status:</p>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 rounded-md bg-black-2 px-2 text-white">
                  <p>In OPD</p>
                  <button className="h-4 w-4 rounded-full bg-black-3">
                    <CrossIconSvg />
                  </button>
                </div>
              </div>
            </div>

            {/* !CLEAR BUTTON */}
            <button className="flex items-center gap-1 text-danger">
              <BinFilledSvg />
              Clear
            </button>
          </div>
        </div>
        {/* !PATIENT TABLE STARTS */}

        <table className=" mt-6 w-full px-4">
          <thead className="inline-block w-full bg-background-color px-4">
            <tr className="grid w-full grid-cols-9 gap-6 py-4 text-left text-black-3">
              <th>Id</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Last Visit</th>
              <th>Total Visit</th>
              <th>Upcoming Visit</th>
              <th>Visit Time</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="inline-block w-full">
            {Array.from({ length: 5 }).map((_item, index) => (
              <tr
                key={index}
                className="grid  w-full grid-cols-9 gap-4 border-b-[1px] border-black-5 px-4  py-4 text-left text-black-3 transition-three-all "
              >
                <td className="flex items-center">{index + 1}</td>
                <td className=" flex items-center">Harrison Stein</td>
                <td className="flex items-center">692-767-2903</td>
                <td className="flex items-center">12-8-2023</td>
                <td className="flex items-center">4 Times</td>
                <td className="flex items-center">02-Feb-2024</td>
                <td className="flex items-center">12:00 PM</td>
                <td className="flex items-center">
                  <div className="flex items-center gap-2">
                    <ToggleBtn name={index} />
                    <p>In-OPD</p>
                  </div>
                </td>
                <td className="flex justify-center">
                  <button className="grid h-8 w-8 place-items-center rounded-full bg-black-5 text-center text-black-3 hover:bg-black-4">
                    <PenSvg />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mr-16  flex justify-between border-t-[1px] border-black-5 p-4">
          <div className="flex items-center gap-2 text-black-3">
            <p>Rows per page:</p>
            {/* !TEST STARTS*/}
            <div className="relative">
              <div
                onClick={() => setPerPageOptionClicked(true)}
                className="flex cursor-pointer items-center justify-between gap-1 rounded-md bg-black-5 pl-2 text-black"
              >
                <p className=" ">5</p>
                <span className="block scale-[.6] text-black-3">
                  <ChevronDownSvg />
                </span>
              </div>
              {perPageOptionClicked && (
                <div className="absolute top-0 flex flex-col gap-1 overflow-hidden rounded-md border-[1px] border-black-5 bg-white p-1">
                  <p
                    onClick={() => setPerPageOptionClicked(false)}
                    className="cursor-pointer rounded-md px-2 text-black-3 hover:bg-black-5"
                  >
                    5
                  </p>
                  <p
                    onClick={() => setPerPageOptionClicked(false)}
                    className="cursor-pointer rounded-md px-2 text-black-3 hover:bg-black-5"
                  >
                    10
                  </p>
                  <p
                    onClick={() => setPerPageOptionClicked(false)}
                    className="cursor-pointer rounded-md px-2 text-black-3 hover:bg-black-5"
                  >
                    25
                  </p>
                </div>
              )}
            </div>
            {/* !TEST ENDS */}
          </div>
          <div className="flex items-center gap-4">
            <p className="flex gap-1 text-black-3">
              <span>
                <span>1</span>-<span>5</span>
              </span>
              of
              <span>
                <span>20</span>
              </span>
            </p>
            <div className="flex gap-2">
              <button className="block text-black-3">
                <ChevronLeftSvg />
              </button>
              <button className="block text-black-3">
                <ChevronRightSvg />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAllPatientsTable;
