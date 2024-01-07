import { useDispatch } from "react-redux";
import { submitStaffMem } from "../../../store/features/doctorModuleSlices/onboardSlice";

const OnboardAddLogo = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="h-full">
        <form
          className="mx-auto mt-6 w-[80%] "
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mx-auto grid h-[200px]  place-items-center rounded-md border-2 border-dashed border-black-4">
            <input type="file" accept="image/*" name="" required id="" />
          </div>
          <p className="mt-2 text-black-3">
            This logo will be shown in your Prescription.
          </p>
          <div className="mt-12 flex justify-center gap-4 ">
            <span
              onClick={() => dispatch(submitStaffMem())}
              className="block cursor-pointer rounded-sm bg-black-5 px-4 py-1 transition-three-all hover:bg-black-3 hover:text-white"
            >
              Skip
            </span>

            <button
              className={` rounded-sm bg-primary px-6 py-1 text-center text-white transition-three-all hover:bg-[#000]`}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardAddLogo;
