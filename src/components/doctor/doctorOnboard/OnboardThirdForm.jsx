import { useSelector } from "react-redux";
import OnboardAddDoctor from "./OnboardAddDoctor";
import { selectAllOnboard } from "../../../store/features/doctorModuleSlices/onboardSlice";
import OnboardAddFrontDesk from "./OnboardAddFrontDesk";
import OnboardAddPharmacist from "./OnboardAddPharmacist";

const OnboardThirdForm = () => {
  const { addStaffForm } = useSelector(selectAllOnboard);
  return (
    <div className="mx-auto w-[min(400px,100%)] rounded-md p-2  py-4 shadow-default">
      {addStaffForm === 0 && <OnboardAddDoctor />}
      {addStaffForm === 1 && <OnboardAddFrontDesk />}
      {addStaffForm === 2 && <OnboardAddPharmacist />}
    </div>
  );
};

export default OnboardThirdForm;
