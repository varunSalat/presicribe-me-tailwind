import { useState } from "react";
import { CheckMarkSvg, QuestionMarkSvg } from "../../../assets/svgs";
import { useDispatch, useSelector } from "react-redux";
import {
  addMoreDoctors,
  changeStaffForm,
  closeOnboardSection,
  selectAllOnboard,
} from "../../../store/features/doctorModuleSlices/onboardSlice";

const OnboardAddDoctor = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedDisabled, setCheckedDisabled] = useState(false);
  const dispatch = useDispatch();

  const { formData } = useSelector(selectAllOnboard);

  const [doctorFormData, setDoctorFormData] = useState({
    DoctorName: "",
    DoctorEmail: "",
    DoctorNumber: "",
    doctorAdminBoth: isChecked,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.staffMem[0] === "singleDoctor") {
      console.log("do an API call");
      dispatch(closeOnboardSection());
    } else if (
      formData.staffMem[0] === "frontDesk" ||
      formData.staffMem.length === 2
    ) {
      dispatch(changeStaffForm(1));
    } else if (formData.staffMem[0] === "pharmacist") {
      dispatch(changeStaffForm(2));
    }
  };
  // console.log(doctorFormData);

  const handleInputChange = (e) => {
    setDoctorFormData({ ...doctorFormData, [e.target.name]: e.target.value });
  };

  const handleAddDoctor = () => {
    if (isChecked) {
      setDoctorFormData({ ...doctorFormData, DoctorEmail: "" });
      setCheckedDisabled(true);
      setIsChecked(false);
    }
    setDoctorFormData({
      DoctorName: "",
      DoctorEmail: "",
      DoctorNumber: "",
      doctorAdminBoth: isChecked,
    });
  };

  console.log(checkedDisabled);

  return (
    <form onSubmit={(e) => handleSubmit(e)} method="POST">
      <div className="my-2 flex flex-col gap-2">
        <label htmlFor="DoctorName">Doctor Name</label>
        <input
          type="text"
          className="rounded-md border-[1px] border-black-4 bg-transparent px-2 py-1 outline-none transition  focus:border-primary active:border-primary "
          placeholder="Doctor name who’s in practice"
          name="DoctorName"
          id="DoctorName"
          required={formData.doctorList.length === 0}
          onChange={(e) => handleInputChange(e)}
          value={doctorFormData.DoctorName}
        />
      </div>
      <div className="my-2 flex flex-col gap-2">
        <label
          htmlFor="DoctorEmail"
          className={isChecked ? "text-black-3" : ""}
        >
          Doctor Email
        </label>
        <input
          type="email"
          name="DoctorEmail"
          id="DoctorEmail"
          disabled={isChecked}
          onChange={(e) => handleInputChange(e)}
          value={isChecked ? "" : doctorFormData.DoctorEmail}
          required={checkedDisabled || formData.doctorList.length === 0}
          className="rounded-md border-[1px] border-black-4 px-2 py-1 outline-none focus:border-primary active:border-primary disabled:bg-black-5"
          placeholder="Doctor email who’s in practice"
        />
      </div>
      <div className="my-2 flex flex-col gap-2">
        <label htmlFor="DoctorNumber">Doctor Phone Number</label>
        <input
          type="number"
          name="DoctorNumber"
          id="DoctorNumber"
          required={formData.doctorList.length === 0}
          onChange={(e) => handleInputChange(e)}
          value={doctorFormData.DoctorNumber}
          maxLength={10}
          className="rounded-md border-[1px] border-black-4 px-2 py-1 outline-none focus:border-primary active:border-primary"
          placeholder="Doctor phone who’s in practice"
        />
      </div>
      <div className="my-6 flex items-center gap-4">
        <div>
          <label
            htmlFor="checkboxLabelTwo"
            className="flex cursor-pointer select-none items-center text-black-3"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="checkboxLabelTwo"
                className="sr-only"
                onChange={() => {
                  setIsChecked(!isChecked);
                  setDoctorFormData({ ...doctorFormData, DoctorEmail: "" });
                }}
                value={isChecked}
                disabled={checkedDisabled}
              />
              <div
                className={`mr-1 flex h-4 w-4 items-center justify-center rounded border ${
                  isChecked && "border-primary bg-primary dark:bg-transparent"
                }`}
              >
                <span className={`opacity-0 ${isChecked && "!opacity-100"}`}>
                  <CheckMarkSvg />
                </span>
              </div>
            </div>
            I am a doctor and admin both
          </label>
        </div>
        <span className="cursor-pointer text-green underline">
          <QuestionMarkSvg />
        </span>
      </div>
      <div className="flex justify-between gap-8">
        {formData.numberOfDoctors === 2 && formData.doctorList.length < 2 && (
          <button
            type="submit"
            onClick={() => {
              dispatch(addMoreDoctors(doctorFormData));
              handleAddDoctor();
            }}
            className="w-full rounded-sm bg-black-5 px-4 py-1 text-center text-black transition-three-all hover:bg-black-3 hover:text-white"
          >
            Add Doctor
          </button>
        )}

        <button
          type="submit"
          className="w-full rounded-sm bg-primary px-4 py-1 text-center text-white transition-three-all hover:bg-[#000]"
        >
          {formData.doctorList.length > 0 ? "Skip" : "Continue"}
        </button>
      </div>
    </form>
  );
};

export default OnboardAddDoctor;
