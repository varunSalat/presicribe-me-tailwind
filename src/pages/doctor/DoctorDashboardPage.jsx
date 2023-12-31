import { DoctorCards, DoctorDashboardTable } from "../../components/doctor";

const DoctorDashboardPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
        <DoctorCards />
      </div>
      <div className="relative mt-8 flex flex-col gap-10 overflow-hidden rounded-2xl">
        <DoctorDashboardTable />
      </div>
    </>
  );
};

export default DoctorDashboardPage;
