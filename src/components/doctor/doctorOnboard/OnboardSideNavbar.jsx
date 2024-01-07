import { sidebarLightThemeLogo } from "../../../assets";
import {
  EnvelopeSvg,
  FacebookRounded,
  InstagramSvg,
  LinkedInSquare,
  PhoneSvg,
  TwitterIconSvg,
} from "../../../assets/svgs";
const OnboardSideNavbar = () => {
  return (
    <div className="h-full w-[200px] bg-white p-4">
      <figure className="w-[150px]">
        <img src={sidebarLightThemeLogo} alt="prescribe-me" />
      </figure>
      <div className="flex h-full w-full flex-col justify-between  pb-12 pt-4 ">
        {/* !CONTACT DETAILS */}
        <div>
          <div className="my-6 border-black-4">
            <span className="grid h-10 w-10 place-items-center rounded-full border-[1px] border-black-4 text-primary">
              <EnvelopeSvg />
            </span>
            <div className="mt-1">
              <a href="mailto:prescribeme@gmail.com" className="underline">
                prescribeme@gmail.com
              </a>
            </div>
          </div>
          <div className="my-6 border-black-4">
            <span className="grid h-10 w-10 place-items-center rounded-full border-[1px] border-black-4 text-primary">
              <PhoneSvg />
            </span>
            <div className="mt-1">
              <a href="tel:9974397197" className="underline">
                +91 9974397197
              </a>
            </div>
          </div>
        </div>
        {/* SOCIAL MEDIA LINKS */}
        <div className="flex justify-around gap-2">
          <a href="#" target="_blank" className="text-black-4">
            <FacebookRounded />
          </a>
          <a href="#" target="_blank" className="text-black-4">
            <LinkedInSquare />
          </a>
          <a href="#" target="_blank" className="text-black-4">
            <InstagramSvg />
          </a>
          <a href="#" target="_blank" className="text-black-4">
            <TwitterIconSvg />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OnboardSideNavbar;
