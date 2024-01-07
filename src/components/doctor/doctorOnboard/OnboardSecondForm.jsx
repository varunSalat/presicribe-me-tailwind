import { useDispatch, useSelector } from "react-redux";
import {
  pharmacistOnboard,
  receptionOnboard,
  singleDocOnboardSecondForm,
} from "../../../assets";
import { QuestionMarkSvg } from "../../../assets/svgs";
import {
  selectAllOnboard,
  selectStaffMem,
  submitStaffMem,
} from "../../../store/features/doctorModuleSlices/onboardSlice";

const selectStaff = [
  {
    img: receptionOnboard,
    header: "We have a front-desk/receptionist",
    text: "Our Front-desk is handling upcoming patients.",
    moreDis: "lorem30",
    label: "frontDesk",
  },
  {
    img: pharmacistOnboard,
    header: "We have an in-house pharmacy",
    text: "We have a pharmacy where all our patients can buy their medicine",
    moreDis: "lorem30",
    label: "pharmacist",
  },
  {
    img: singleDocOnboardSecondForm,
    header: "We have only one doctor",
    text: "We have one person who is managing everything.",
    moreDis: "lorem30",
    label: "singleDoctor",
  },
];
const OnboardSecondForm = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector(selectAllOnboard);
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-4">
      {selectStaff.map((item, index) => (
        <button
          key={index}
          className={`flex w-[95%] cursor-pointer items-center justify-between gap-4 rounded-md  px-2 shadow-card transition-three-all  hover:bg-[#ededed]  md:w-[480px] ${
            formData.staffMem.some((mem) => mem === item.label) &&
            " border-[1px] border-primary"
          }`}
        >
          <div
            className="my-2 flex flex-col gap-4 md:flex-row md:items-center"
            onClick={() => dispatch(selectStaffMem(item.label))}
          >
            <figure className="h-[80px] w-[80px] min-w-[80px]">
              <img
                src={item.img}
                className="h-full w-full"
                alt="receptionOnboard"
              />
            </figure>
            <div className="text-left">
              <h3 className="text-xl font-semibold">{item.header}</h3>
              <p className="text-black-3">{item.text}</p>
            </div>
          </div>
          <span>
            <QuestionMarkSvg />
          </span>
        </button>
      ))}
      <button
        onClick={() => dispatch(submitStaffMem())}
        className="mt-1 w-[90%] cursor-pointer rounded-sm bg-primary py-1 text-center text-white transition-three-all hover:bg-[#000] md:w-[480px]"
      >
        Continue
      </button>
    </div>
  );
};

export default OnboardSecondForm;
