import { useSelector } from "react-redux";
import {
  DoctorCards,
  DoctorDashboardTable,
  OnboardMainSection,
} from "../../components/doctor";
import { selectAllOnboard } from "../../store/features/doctorModuleSlices/onboardSlice";

const DoctorDashboardPage = () => {
  const { isOnboardSection } = useSelector(selectAllOnboard);
  return (
    <>
      {isOnboardSection && <OnboardMainSection />}
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
