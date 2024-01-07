import { useSelector } from "react-redux";
import { sidebarLightThemeLogo } from "../../../assets";
import OnboardFirstForm from "./OnboardFirstForm";
import OnboardFooterNavigation from "./OnboardFooterNavigation";
import { selectAllOnboard } from "../../../store/features/doctorModuleSlices/onboardSlice";
import OnboardThirdForm from "./OnboardThirdForm";
import OnboardAddLogo from "./OnboardAddLogo";

const OnboardMainSection = () => {
  const { activeForm } = useSelector(selectAllOnboard);

  return (
    <section className="fixed left-0 top-0 z-20 grid h-screen  w-screen place-items-center overflow-auto bg-[rgba(0,0,0,0.5)] backdrop-blur-[5px]">
      <div className="h-[950px] w-[min(900px,100%)]  gap-4 overflow-hidden  rounded-lg bg-black-5 md:h-[550px] ">
        <figure className="absolute ml-2 mt-2 block h-fit w-40 ">
          <img src={sidebarLightThemeLogo} alt="prescribe-me" />
        </figure>
        <div className="mt-16 h-fit w-full text-center sm:mt-12  md:mt-4">
          <h1 className="text-2xl">
            {activeForm === 0 && "We would love to work with you!"}
            {activeForm === 1 && "Upload your Hospital logo"}
            {activeForm === 2 && "Select your plan!"}
          </h1>
          <p className="mt-2 text-sm text-black-3">
            Let us know more about you.
          </p>
        </div>
        <div className="relative my-4 h-[900px] bg-white py-8 md:h-full">
          {activeForm === 0 && <OnboardThirdForm />}
          {activeForm === 1 && <OnboardAddLogo />}
          {activeForm === 2 && <OnboardFirstForm />}
          <OnboardFooterNavigation />
        </div>
      </div>
    </section>
  );
};

export default OnboardMainSection;
