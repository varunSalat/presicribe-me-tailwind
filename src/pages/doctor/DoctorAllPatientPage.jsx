import { DoctorAllPatientsTable } from "../../components/doctor";

const DoctorAllPatientPage = () => {
  return (
    <>
      <div className="relative flex flex-col gap-10 overflow-hidden rounded-2xl">
        <DoctorAllPatientsTable />
      </div>
    </>
  );
};

export default DoctorAllPatientPage;
