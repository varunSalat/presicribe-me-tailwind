import { OpenEyeSvg, RefreshIconSvg } from "../../assets/svgs";

const DoctorDashboardTable = () => {
  return (
    <div className="w-full overflow-x-hidden rounded-md border border-black-5 bg-white py-2 shadow-default dark:border-black-2 dark:bg-black">
      <div className="top-0  flex w-full justify-between border-b-[1px]  border-black-4 bg-white px-4 pb-4 dark:border-black-2  dark:bg-black  md:px-6   xl:px-7.5">
        <div>
          <p className="text-body  text-black-3 dark:text-white">
            Latest Appointments
          </p>
          <h4 className="mt-1 text-xl font-semibold text-black dark:text-white">
            Today’s Appointment List
          </h4>
        </div>
        {/* <div className="block md:hidden">
      <MobileDashboardBtn />
    </div> */}
        <div className="hidden gap-4 py-[6px]  md:flex">
          <button
            className="three-mili-sec-trans dark:bg-graydark text-blax  group flex h-fit gap-2 whitespace-nowrap  rounded-md border-[1px] border-primary px-3 py-2 font-medium transition-three-all hover:bg-primary hover:text-white dark:text-white"
            style={{ alignItems: "center" }}
          >
            <div className="mt-1 transition-three-all group-hover:text-white">
              <OpenEyeSvg />
            </div>
            Upcoming Appointments
          </button>
          <button
            className="text-gray flex h-fit  gap-2 whitespace-nowrap  rounded-md px-3 py-2 font-medium"
            style={{ alignItems: "center" }}
            title="Refresh"
          >
            <div className="text-black-3">
              <RefreshIconSvg />
            </div>
          </button>
        </div>
      </div>

      {/* !TABLE STYLING */}
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-3 border-b-[1px] border-black-5 px-1 py-4 text-left text-title-xsm font-light text-black-3 dark:border-black-2 sm:grid-cols-5 sm:px-9 md:grid-cols-6 lg:grid-cols-8  ">
            <th className="hidden sm:block">No</th>
            <th className="col-span-1 lg:col-span-2">Patient Name</th>
            <th className="hidden  lg:block">Time</th>
            <th className="hidden sm:block">Date</th>
            <th>Last visit</th>
            <th className="hidden md:block">Total visit</th>
            <th className="text-center lg:text-left">Action</th>
          </tr>
        </thead>
        <tbody className="table-scrollbar block h-[400px] overflow-y-auto">
          {Array.from({ length: 10 }).map((_item, index) => (
            <tr
              key={index}
              className="grid grid-cols-3 border-b-[1px] border-black-4 px-1 py-4 text-left text-title-xsm text-black transition-three-all hover:bg-black-5 dark:border-black-2 dark:text-white hover:dark:bg-black-2  sm:grid-cols-5 sm:px-9  sm:pr-8 md:grid-cols-6 lg:grid-cols-8"
            >
              <td className="hidden sm:block">{index + 1}</td>
              <td className="col-span-1 lg:col-span-2">
                <h4>Shreeji Patel</h4>
                <p className="text-sm text-black-3">Old Case</p>
              </td>
              <td className="hidden  lg:block">12:00 PM</td>
              <td className="hidden sm:block">02-04-2023</td>
              <td>2 Days ago</td>
              <td className="hidden md:block">2 Times</td>
              <td className="text-center lg:text-left">
                {index === 0 && (
                  <button className="rounded-md border-[2px] border-success px-3 py-1 font-medium text-black transition-three-all hover:bg-success hover:text-white dark:text-white">
                    Active
                  </button>
                )}
                {index !== 0 && (
                  <button className="rounded-md border-[2px] border-primary px-3 py-1 font-medium text-black transition-three-all hover:bg-primary hover:text-white dark:text-white">
                    View
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorDashboardTable;
