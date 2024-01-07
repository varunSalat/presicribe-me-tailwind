import { useDispatch } from "react-redux";
import { selectNumOfDocs } from "../../../store/features/doctorModuleSlices/onboardSlice";
import { multipleDoctorImg, singleDoctorImg } from "../../../assets";

const OnboardFirstForm = () => {
  const dispatch = useDispatch();
  const firstFormText = [
    {
      img: singleDoctorImg,
      header: "Single Doctor",
      dis: "This option is for solo practitioners who manage their practice independently.",
    },
    {
      img: multipleDoctorImg,
      header: "Multiple Doctors",
      dis: "If there are multiple doctors practicing in your clinic.",
    },
  ];
  return (
    <div className="mt-0 flex flex-wrap justify-center gap-12 md:mt-9 ">
      {firstFormText.map((item, index) => (
        <div
          key={index}
          className="w-[90%]  overflow-hidden rounded-md border-[1px] border-black-5 shadow-card md:w-[min(220px,100%)]"
        >
          <figure>
            <img
              className="h-[200px] w-full bg-black-3 object-cover object-center md:h-[150px]"
              src={item.img}
              alt={item.header}
            />
          </figure>
          <div className={`p-4`}>
            <h4 className="my-1 text-xl">{item.header}</h4>
            <p className="text-sm text-black-3">{item.dis}</p>
            <button
              onClick={() => dispatch(selectNumOfDocs(index + 1))}
              className={`${
                index === 1 ? "mt-7" : "mt-2"
              } w-full cursor-pointer rounded-sm bg-primary py-1 text-center text-white transition-three-all hover:bg-[#000]`}
            >
              Continue
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnboardFirstForm;
