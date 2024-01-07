import { useDispatch, useSelector } from "react-redux";
import {
  navigateOnboardForm,
  selectAllOnboard,
} from "../../../store/features/doctorModuleSlices/onboardSlice";

const OnboardFooterNavigation = () => {
  const { activeForm } = useSelector(selectAllOnboard);
  const dispatch = useDispatch();
  return (
    <div className="bottom-[7em] left-1/2 z-20 mt-8 md:absolute md:mt-0 md:-translate-x-1/2">
      <div className="flex justify-center gap-1">
        {Array.from({ length: 3 }).map((_item, index) => (
          <span
            key={index}
            onClick={() => dispatch(navigateOnboardForm(index))}
            className={`block h-[5px]   cursor-pointer rounded-md ${
              activeForm === index
                ? "w-[30px] bg-primary"
                : "w-[20px] bg-black-4"
            } transition-three-all hover:bg-primary`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default OnboardFooterNavigation;
