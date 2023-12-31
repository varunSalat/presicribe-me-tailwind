import { Link } from "react-router-dom";
import { useState } from "react";
import { SignUpFormImg } from "../../assets";
const SignUpFormSecond = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="absolute left-[50%] top-[50%] flex w-[1000px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="w-[45%] overflow-hidden rounded-r-3xl bg-[#F7F7F7]">
        <figure className="h-full w-full scale-[1.2]">
          <img src={SignUpFormImg} alt="login-form-img" />
        </figure>
      </div>
      <div className="w-[55%] px-4 py-2 ">
        <div className="">
          <h1 className="text-3xl">Sign Up</h1>
          <p className="text-body mt-1">Get started with Prescribe Me</p>
        </div>
        <form action="#" className="mt-2">
          <div className="flex gap-4">
            <div className="my-2 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Hospital Name*
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              />
            </div>
            <div className="my-2 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Business Email*
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="relative my-4 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Password*
              </label>
              <input
                type={showPass ? "text" : "password"}
                required
                placeholder="Password"
                className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              />
              {showPass ? (
                <span
                  className="absolute right-1 top-[40%] cursor-pointer px-1 py-4 "
                  onClick={() => setShowPass(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="12"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M24.8489 7.86628C22.4952 3.27383 17.8355 0.166626 12.5 0.166626C7.16447 0.166626 2.50345 3.276 0.151018 7.86671C0.0517306 8.06311 0 8.2801 0 8.50018C0 8.72025 0.0517306 8.93724 0.151018 9.13364C2.50475 13.7261 7.16447 16.8333 12.5 16.8333C17.8355 16.8333 22.4965 13.7239 24.8489 9.13321C24.9482 8.9368 25 8.71981 25 8.49974C25 8.27967 24.9482 8.06268 24.8489 7.86628ZM12.5 14.75C11.2638 14.75 10.0555 14.3834 9.02766 13.6966C7.99985 13.0099 7.19878 12.0338 6.72573 10.8917C6.25268 9.74969 6.12891 8.49303 6.37007 7.28064C6.61123 6.06826 7.20648 4.95462 8.08056 4.08054C8.95464 3.20646 10.0683 2.61121 11.2807 2.37005C12.493 2.12889 13.7497 2.25266 14.8917 2.72571C16.0338 3.19876 17.0099 3.99984 17.6967 5.02764C18.3834 6.05545 18.75 7.26383 18.75 8.49996C18.7504 9.32083 18.589 10.1337 18.275 10.8922C17.9611 11.6507 17.5007 12.3398 16.9203 12.9203C16.3398 13.5007 15.6507 13.9611 14.8922 14.275C14.1338 14.589 13.3209 14.7504 12.5 14.75ZM12.5 4.33329C12.1281 4.33849 11.7586 4.39382 11.4015 4.49779C11.6958 4.89782 11.8371 5.3901 11.7996 5.88535C11.7621 6.3806 11.5484 6.84603 11.1972 7.19722C10.846 7.54842 10.3806 7.76213 9.88537 7.79959C9.39012 7.83706 8.89784 7.6958 8.49781 7.40143C8.27001 8.24067 8.31113 9.1302 8.61538 9.94484C8.91962 10.7595 9.47167 11.4582 10.1938 11.9426C10.916 12.4271 11.7719 12.6729 12.641 12.6454C13.5102 12.618 14.3489 12.3187 15.039 11.7896C15.7291 11.2605 16.236 10.5284 16.4882 9.69613C16.7404 8.86392 16.7253 7.97356 16.445 7.15038C16.1647 6.3272 15.6333 5.61265 14.9256 5.1073C14.2179 4.60195 13.3696 4.33125 12.5 4.33329Z"
                      fill="#6C6C6C"
                    />
                  </svg>
                </span>
              ) : (
                <span
                  className="absolute right-1 top-[40%] cursor-pointer px-1 py-3"
                  onClick={() => setShowPass(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1246_3098)">
                      <path
                        d="M12.4999 18.125C9.53702 18.125 7.13859 15.8316 6.91788 12.9254L2.82023 9.75857C2.28156 10.4344 1.78585 11.1488 1.38585 11.9301C1.29649 12.1068 1.24994 12.3021 1.24994 12.5002C1.24994 12.6982 1.29649 12.8935 1.38585 13.0703C3.50421 17.2035 7.69796 20 12.4999 20C13.5511 20 14.5652 19.8437 15.5425 19.5914L13.5155 18.023C13.1808 18.0877 12.8408 18.1218 12.4999 18.125ZM24.7585 20.3945L20.4402 17.057C21.7519 15.9515 22.8308 14.5962 23.614 13.0699C23.7033 12.8931 23.7499 12.6978 23.7499 12.4998C23.7499 12.3017 23.7033 12.1064 23.614 11.9297C21.4956 7.79646 17.3019 4.99998 12.4999 4.99998C10.4888 5.00242 8.51031 5.50872 6.74523 6.47264L1.7757 2.63162C1.71089 2.58119 1.63679 2.54403 1.55762 2.52226C1.47844 2.50048 1.39576 2.49452 1.31428 2.50471C1.2328 2.51491 1.15413 2.54106 1.08277 2.58166C1.0114 2.62227 0.948736 2.67655 0.898353 2.74139L0.131556 3.7285C0.0298368 3.85935 -0.015743 4.02525 0.00484145 4.1897C0.0254259 4.35416 0.110489 4.5037 0.241322 4.60545L23.2241 22.3683C23.2889 22.4188 23.363 22.4559 23.4422 22.4777C23.5214 22.4995 23.6041 22.5054 23.6856 22.4952C23.767 22.4851 23.8457 22.4589 23.9171 22.4183C23.9884 22.3777 24.0511 22.3234 24.1015 22.2586L24.8687 21.2715C24.9703 21.1406 25.0159 20.9746 24.9952 20.8102C24.9745 20.6457 24.8894 20.4962 24.7585 20.3945ZM17.5819 14.8476L16.0468 13.6609C16.1761 13.2873 16.2447 12.8953 16.2499 12.5C16.2575 11.9212 16.1293 11.3487 15.8755 10.8284C15.6217 10.3081 15.2495 9.85465 14.7886 9.50436C14.3278 9.15407 13.7912 8.91674 13.2221 8.81144C12.6529 8.70614 12.0669 8.73579 11.5112 8.89803C11.7468 9.21721 11.8742 9.60329 11.8749 9.99998C11.8691 10.132 11.8489 10.263 11.8148 10.3906L8.93937 8.16834C9.93819 7.33365 11.1982 6.87594 12.4999 6.87498C13.2387 6.87457 13.9704 7.01978 14.653 7.30232C15.3356 7.58486 15.9559 7.99918 16.4783 8.52159C17.0007 9.044 17.415 9.66426 17.6976 10.3469C17.9801 11.0295 18.1253 11.7612 18.1249 12.5C18.1249 13.3449 17.9183 14.1324 17.5819 14.848V14.8476Z"
                        fill="#6C6C6C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1246_3098">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              )}
            </div>
            <div className="relative my-4 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Confirm Password*
              </label>
              <input
                type={showPass ? "text" : "password"}
                required
                placeholder="Confirm Password"
                className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="my-2 w-1/2">
              <label className="mb-1 block text-black dark:text-white">
                Primary Number*
              </label>
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
            <div className="my-2 w-1/2">
              {/* <label className="mb-1 block text-black dark:text-white">
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
            <label className="mb-1 block text-black dark:text-white">
              Clinic Address*
            </label>

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
