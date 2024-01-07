import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignUpFormImg } from "../../assets";
import { CloseEyeSvg, OpenEyeSvg } from "../../assets/svgs";
import { useDispatch } from "react-redux";
import { openOnboardSection } from "../../store/features/doctorModuleSlices/onboardSlice";

const SignUpFormSecond = () => {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(openOnboardSection());
    navigate("/doctor");
  };
  return (
    <div className="absolute left-[50%] top-[80px] flex w-[90%] translate-x-[-50%] overflow-hidden rounded-lg bg-white shadow-lg md:top-[50%] md:w-[min(1000px,70%)] md:translate-y-[-50%]">
      <div className="hidden w-[45%] overflow-hidden rounded-r-3xl bg-[#F7F7F7] lg:block">
        <figure className="h-full w-full scale-[1.2]">
          <img src={SignUpFormImg} alt="login-form-img" />
        </figure>
      </div>
      <div className="w-[full] px-4 py-2 lg:w-[55%] ">
        <div className="">
          <h1 className="text-3xl">Sign Up</h1>
          <p className="text-body mt-1">Get started with Prescribe Me</p>
        </div>
        <form action="#" className="mt-2" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="my-2 w-full sm:w-1/2">
              <label className="mb-1 block text-black">Hospital Name*</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              />
            </div>
            <div className="my-2 w-full sm:w-1/2">
              <label className="mb-1 block text-black">Business Email*</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="my-2 w-full sm:w-1/2">
              <label className="mb-1 block text-black">Password*</label>
              <input
                type={showPass ? "text" : "password"}
                required
                placeholder="Password"
                className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              />
              {showPass ? (
                <span
                  className="absolute right-[5%] cursor-pointer px-1 py-3 text-black-3 sm:right-1 sm:top-[40%] "
                  onClick={() => setShowPass(false)}
                >
                  <OpenEyeSvg />
                </span>
              ) : (
                <span
                  className="absolute right-[5%] cursor-pointer px-1 py-3 text-black-3 sm:right-1 sm:top-[40%]"
                  onClick={() => setShowPass(true)}
                >
                  <CloseEyeSvg />
                </span>
              )}
            </div>
            <div className="my-2 w-full sm:w-1/2">
              <label className="mb-1 block text-black">Confirm Password*</label>
              <input
                type={showPass ? "text" : "password"}
                required
                placeholder="Confirm Password"
                className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="my-2 w-full sm:w-1/2">
              <label className="mb-1 block text-black">Primary Number*</label>
              <input
                type="number"
                required
                pattern="[0-9]{10}"
                placeholder="00 0000 0000"
                maxLength="10"
                minLength={10}
                className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              />
            </div>
            <div className="my-2 w-full sm:w-1/2">
              {/* <label className="mb-1 block text-black">
                Secondary Number
              </label>
              <input
                type="number"
                placeholder="00 0000 0000"
                maxLength="10"
                className="border-black-4 disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              /> */}
            </div>
          </div>
          <div className="my-4">
            <label className="mb-1 block text-black">Clinic Address*</label>

            <textarea
              className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full resize-none rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              name=""
              id=""
              rows="4"
            ></textarea>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <button
              type="submit"
              className="transition-three rounded-md border-[1px] border-white bg-green px-8 py-2 text-white hover:border-black"
            >
              Sign up
            </button>
            <Link to={"/"} className="text-green underline">
              Already have an account?
            </Link>
          </div>
          <p className="text-bodydark2 text-[0.8rem]">
            We&apos;ve updated our terms to enhance your data security.{" "}
            <Link className="text-black underline">Click here</Link> to check
            our latest terms.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpFormSecond;
