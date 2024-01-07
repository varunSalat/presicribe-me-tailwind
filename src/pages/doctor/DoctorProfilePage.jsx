import { hospitalBuildingImg } from "../../assets";
import {
  BillingIconSvg,
  NoficationIconSvg,
  PenSvg,
  ProfileCardSvg,
  SocialProfilesIcon,
} from "../../assets/svgs";
import { Breadcrumb } from "../../components/general";

const DoctorProfilePage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Account</h1>
      <div className="mt-2">
        <Breadcrumb />
      </div>
      {/* !PROFILE */}
      <div className="mt-12">
        {/* PROFILE NAVBAR */}
        <div className="flex gap-9">
          <button className="flex items-center gap-1 border-b-2 pb-1 text-black-2">
            <span>
              <ProfileCardSvg />
            </span>
            General
          </button>
          <button className="flex items-center gap-1  pb-1 text-black-3 ">
            <span>
              <BillingIconSvg />
            </span>
            Billing
          </button>
          <button className="flex items-center gap-1  pb-1 text-black-3 ">
            <span>
              <NoficationIconSvg />
            </span>
            Notifications
          </button>
          <button className="flex items-center gap-1  pb-1 text-black-3 ">
            <span>
              <SocialProfilesIcon />
            </span>
            Social Links
          </button>
        </div>
      </div>

      {/* GENERAL PROFILE */}
      <div className="mt-20">
        <div className="flex items-center gap-8">
          <div className="w-fit">
            <div className="relative w-fit ">
              <label htmlFor="hospital-logo" className="cursor-pointer">
                <figure className="h-[120px] w-[120px] overflow-hidden rounded-full">
                  <img
                    src={hospitalBuildingImg}
                    className="h-full w-full"
                    alt="hospital-name"
                  />
                </figure>
              </label>
              <label
                htmlFor="hospital-logo"
                className="absolute bottom-4 right-[0] grid h-7 w-7 cursor-pointer place-items-center  rounded-full border-[1px] border-black-4 bg-white text-black-3 shadow-card"
              >
                <PenSvg />
              </label>
              <input
                type="file"
                className="hidden"
                accept="image/jpeg, image/png"
                name="hospital-logo"
                id="hospital-logo"
              />
            </div>
            <p className="mt-2 text-center text-sm text-black-3">
              Hospital Logo
            </p>
          </div>
          {/* GENERAL PROFILE RIGHT SIDE */}
          <div>
            <form action="" className="w-[600px]">
              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <div className="my-2 w-full sm:w-1/2">
                  <label className="mb-1 block text-black">
                    Hospital Name*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
                  />
                </div>
                <div className="my-2 w-full sm:w-1/2">
                  <label className="mb-1 block text-black">
                    Business Email*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <div className="my-2 w-full sm:w-1/2">
                  <label className="mb-1 block text-black">
                    Hospital Number*
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="Enter your name"
                    className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
                  />
                </div>
                <div className="my-2 w-full sm:w-1/2">
                  <label className="mb-1 block text-black">State*</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your email"
                    className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 sm:flex-row">
                <div className="my-2 w-full sm:w-1/2">
                  <label className="mb-1 block text-black">
                    Hospital Number*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
                  />
                </div>
                <div className="my-2 w-full sm:w-1/2">
                  <label className="mb-1 block text-black">
                    Business Address*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:focus:border-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfilePage;
