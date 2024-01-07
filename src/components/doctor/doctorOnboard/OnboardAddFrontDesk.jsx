import { useDispatch, useSelector } from "react-redux";
import {
  addMoreFrontDesk,
  changeStaffForm,
  closeOnboardSection,
  selectAllOnboard,
} from "../../../store/features/doctorModuleSlices/onboardSlice";
import { useState } from "react";

const OnboardAddFrontDesk = () => {
  const { formData } = useSelector(selectAllOnboard);
  const dispatch = useDispatch();

  const [frontDeskFormData, setFrontDeskFormData] = useState({
    frontDeskName: "",
    frontDeskEmail: "",
    frontDeskNumber: "",
  });

  const handleInputChange = (e) => {
    setFrontDeskFormData({
      ...frontDeskFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddFrontDesk = () => {
    setFrontDeskFormData({
      frontDeskName: "",
      frontDeskEmail: "",
      frontDeskNumber: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.staffMem[0] === "frontDesk" &&
      formData.staffMem.length === 1
    ) {
      console.log("API CALL");
      dispatch(closeOnboardSection());
    } else {
      dispatch(changeStaffForm(2));
      dispatch(addMoreFrontDesk(frontDeskFormData));
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} method="POST">
      <div className="my-6 flex flex-col gap-2">
        <label htmlFor="frontDeskName">Frontdesk Name</label>
        <input
          type="text"
          className="rounded-md border-[1px] border-black-4 px-2 py-1 outline-none transition  focus:border-primary active:border-primary "
          placeholder="Doctor name who’s in practice"
          name="frontDeskName"
          id="frontDeskName"
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className="my-6 flex flex-col gap-2">
        <label htmlFor="frontDeskEmail">Frontdesk Email</label>
        <input
          type="email"
          className="rounded-md border-[1px] border-black-4 px-2 py-1 outline-none focus:border-primary active:border-primary disabled:bg-black-5"
          placeholder="Doctor email who’s in practice"
          name="frontDeskEmail"
          id="frontDeskEmail"
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div className="my-6 flex flex-col gap-2">
        <label htmlFor="frontDeskNumber">Frontdesk Phone Number</label>
        <input
          type="text"
          required
          className="rounded-md border-[1px] border-black-4 px-2 py-1 outline-none focus:border-primary active:border-primary"
          placeholder="Doctor phone who’s in practice"
          name="frontDeskNumber"
          id="frontDeskNumber"
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div className="flex justify-between gap-8">
        {formData.numberOfDoctors === 2 &&
          formData.frontDeskList.length < 2 && (
            <button
              type="submit"
              onClick={() => {
                dispatch(addMoreFrontDesk(frontDeskFormData));
                handleAddFrontDesk();
              }}
              className="w-full rounded-sm bg-black-5 px-4 py-1 text-center text-black transition-three-all hover:bg-black-3 hover:text-white"
            >
              Add Frontdesk
            </button>
          )}
        <button
          type="submit"
          onClick={() => handleSubmit()}
          className="w-full rounded-sm bg-primary px-4 py-1 text-center text-white transition-three-all hover:bg-[#000]"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default OnboardAddFrontDesk;
