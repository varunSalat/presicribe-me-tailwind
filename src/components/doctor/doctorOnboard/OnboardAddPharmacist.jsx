import { useDispatch } from "react-redux";
import { closeOnboardSection } from "../../../store/features/doctorModuleSlices/onboardSlice";

const OnboardAddPharmacist = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("do an API call");
    dispatch(closeOnboardSection());
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} method="POST">
      <div className="my-6 flex flex-col gap-2">
        <label htmlFor="pharmacistName">Pharmacist Name</label>
        <input
          type="text"
          className="rounded-md border-[1px] border-black-4 px-2 py-1 outline-none transition  focus:border-primary active:border-primary "
          placeholder="Doctor name who’s in practice"
          name="pharmacistName"
          id="pharmacistName"
          required
        />
      </div>
      <div className="my-6 flex flex-col gap-2">
        <label htmlFor="pharmacistEmail">Pharmacist Email</label>
        <input
          type="email"
          className="rounded-md border-[1px] border-black-4 px-2 py-1 outline-none focus:border-primary active:border-primary disabled:bg-black-5"
          placeholder="Doctor email who’s in practice"
          name="pharmacistEmail"
          id="pharmacistEmail"
          required
        />
      </div>
      <div className="my-6 flex flex-col gap-2">
        <label htmlFor="pharmacistNum">Pharmacist Phone Number</label>
        <input
          type="text"
          required
          className="rounded-md border-[1px] border-black-4 px-2 py-1 outline-none focus:border-primary active:border-primary"
          placeholder="Doctor phone who’s in practice"
          name="pharmacistNum"
          id="pharmacistNum"
        />
      </div>
      <button
        type="submit"
        className=" w-full cursor-pointer rounded-sm bg-primary py-1 text-center text-white transition-three-all hover:bg-[#000]"
      >
        Add Pharmacist
      </button>
    </form>
  );
};

export default OnboardAddPharmacist;
