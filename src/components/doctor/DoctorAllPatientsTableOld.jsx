import { SearchIconSvg } from "../../assets/svgs";
import MobileDashboardBtn from "./MobileDashboardbtn";

const DoctorAllPatientsTable = () => {
  return (
    <div className="w-full overflow-x-hidden rounded-md border border-black-5 bg-white py-2 shadow-default dark:border-black-2 dark:bg-black">
      <div className="top-0 flex w-full  justify-between border-b-[1px]  border-black-4 bg-white px-4 pb-2 dark:border-black-2  dark:bg-black  md:px-6   xl:px-7.5">
        <div>
          <h4 className="mt-2 text-xl font-semibold text-black dark:text-white">
            All Patients
          </h4>
        </div>
        <div className="block md:hidden">
          <MobileDashboardBtn />
        </div>
      </div>
      <form
        action=""
        method="post"
        className="flex items-center justify-center gap-2 px-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          name=""
          placeholder="Search your patients with name, id, email or status"
          className=" mt-2 w-full rounded-sm border-[1px] border-black-3 px-2 py-1 outline-none"
          id=""
        />
        <button className="mt-2 text-black-4">
          <SearchIconSvg />
        </button>
      </form>

      {/* !TABLE STYLING */}
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-3 border-b-[1px] border-black-5 px-1 py-4 text-left text-base  text-black-3 dark:border-black-2 sm:grid-cols-5 sm:px-9 md:grid-cols-6 lg:grid-cols-7  ">
            <th className="hidden sm:block">Id</th>
            <th className="col-span-1">Patient Name</th>
            <th className="hidden  lg:block">Contact Number</th>
            <th className="hidden sm:block">Date</th>
            <th className="hidden md:block">Total visit</th>
            <th className="hidden md:block">Status</th>
            <th className="text-center lg:text-left">Action</th>
          </tr>
        </thead>
        <tr className="grid grid-cols-3 border-b-[1px] border-black-5 px-1 py-4 text-left text-base  text-black-3 dark:border-black-2 sm:grid-cols-5 sm:px-9 md:grid-cols-6 lg:grid-cols-7  ">
          <th className="hidden sm:block">
            <input
              type="number"
              placeholder="Filter by ID"
              className="w-[70%] rounded-sm border-[1px] border-black-4 px-1 text-base font-normal outline-none"
              name=""
              id=""
            />
          </th>
          <th className="col-span-1">
            <input
              type="text"
              placeholder="Filter by name"
              className="w-[70%] rounded-sm border-[1px] px-1 text-base font-normal outline-none"
              name=""
              id=""
            />
          </th>
          <th className="hidden  lg:block">
            <input
              type="number"
              placeholder="Filter by num"
              className="w-[70%] rounded-sm border-[1px] px-1 text-base font-normal outline-none"
              name=""
              id=""
            />
          </th>
          <th className="hidden sm:block">
            <input
              type="date"
              placeholder="Filter by num"
              className="w-[80%] rounded-sm border-[1px] px-1 text-base font-normal outline-none"
              name=""
              id=""
            />
          </th>
          <th className="hidden md:block">-</th>
          <th className="hidden md:block">
            <select
              name=""
              id=""
              className="rounded-sm border-[1px] px-1 py-[2px] outline-none"
            >
              <option value="" disabled>
                Filter by Status
              </option>
              <option value="">Active</option>
              <option value="">In Active</option>
            </select>
          </th>
          <th className="text-center lg:text-left">
            <button className="rounded-md bg-primary px-5 py-1 font-normal text-white">
              Filter
            </button>
          </th>
        </tr>
        <tbody className="table-scrollbar block h-[400px] overflow-y-auto">
          {Array.from({ length: 10 }).map((_item, index) => (
            <tr
              key={index}
              className="grid grid-cols-3 border-b-[1px] border-black-4 px-1 py-4 text-left text-base text-black transition-three-all hover:bg-black-5 dark:border-black-2 dark:text-white hover:dark:bg-black-2  sm:grid-cols-5 sm:px-9  sm:pr-8 md:grid-cols-6 lg:grid-cols-7"
            >
              <td className="hidden sm:block">{index + 1}</td>
              <td className="col-span-1">
                <h4>Shreeji Patel</h4>
                <p className="text-sm text-black-3">Old Case</p>
              </td>
              <td className="hidden  lg:block">+91 9624478191</td>
              <td className="hidden sm:block">02-04-2023</td>
              <td>2 Times</td>
              <td className="hidden md:block">
                <label className="relative me-5 inline-flex cursor-pointer items-center">
                  <input type="checkbox" value="" className="peer sr-only" />
                  <div className="peer h-6 w-11 rounded-full bg-danger after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full  after:bg-white after:transition-all after:content-[''] peer-checked:bg-success peer-checked:after:translate-x-full peer-checked:after:border-white   rtl:peer-checked:after:-translate-x-full"></div>
                  <span className="text-gray-900 dark:text-gray-300 ms-3 text-sm font-medium">
                    In-House
                  </span>
                </label>
              </td>
              <td className="text-center lg:text-left">
                <button className="ml-3 border-b-[2px] border-b-primary font-medium text-primary transition-three-all hover:bg-primary hover:text-white dark:text-white">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorAllPatientsTable;
