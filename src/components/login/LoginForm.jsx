import { Link, useNavigate } from "react-router-dom";
import { loginFormImg } from "../../assets";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLoginInputChange,
  selectAllLoginStates,
} from "../../store/features/loginModuleSlices/loginSlice";
import { useLoginUserMutation } from "../../store/apis/loginModuleAPIs";

const roles = ["Doctor", "Receptionist", "Pharmacist"];

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const { loginFormData } = useSelector(selectAllLoginStates);
  const { email, pass, designation } = loginFormData;

  const navigate = useNavigate();

  const [LoginModuleAPIs, loginUserRes] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await LoginModuleAPIs(loginFormData);
    localStorage.setItem("doctor", true);
    navigate("/doctor");
  };

  return (
    <div className="absolute left-[50%] top-[80px] flex w-[min(900px,90%)] translate-x-[-50%] flex-col-reverse justify-between overflow-hidden rounded-lg bg-white align-middle shadow-lg lg:top-[50%] lg:translate-y-[-50%] lg:flex-row">
      <div className="w-full bg-[#F7F7F7] px-4 py-2 lg:w-[60%]">
        <h1 className="text-2xl font-medium">
          Online Prescription System for Hospitals.
        </h1>
        <p className="text-body mt-1 text-xl">
          We are Efficient, Accurate, and Secure
        </p>
        <figure className="my-12 w-full ">
          <img src={loginFormImg} alt="login-form-img" />
        </figure>
        <div className="mt-[4.5em]   flex justify-between">
          <Link to={"/"} className="text-md flex gap-1 text-green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 25 25"
              fill="none"
              className="mt-1 fill-green"
            >
              <path
                d="M14.1357 21.7334L13.0518 22.8174C12.5928 23.2764 11.8506 23.2764 11.3965 22.8174L1.9043 13.3301C1.44531 12.8711 1.44531 12.1289 1.9043 11.6748L11.3965 2.18262C11.8555 1.72363 12.5977 1.72363 13.0518 2.18262L14.1357 3.2666C14.5996 3.73047 14.5898 4.4873 14.1162 4.94141L8.23242 10.5469H22.2656C22.915 10.5469 23.4375 11.0693 23.4375 11.7188V13.2813C23.4375 13.9307 22.915 14.4531 22.2656 14.4531H8.23242L14.1162 20.0586C14.5947 20.5127 14.6045 21.2695 14.1357 21.7334Z"
                fill=""
              />
            </svg>
            Go Back
          </Link>
          <Link to={"/create-account"} className="text-green underline">
            Create an Account
          </Link>
        </div>
      </div>
      <div className="w-full  px-4 py-2 lg:w-[40%]  ">
        <div className="text-center">
          <h1 className="text-2xl">Sign In</h1>
          <p className="text-body mt-2">
            Welcome back! please enter your details
          </p>
        </div>
        <form action="#" className="mt-4" onSubmit={(e) => handleSubmit(e)}>
          <div className="my-4">
            <label
              htmlFor="email"
              className="mb-1 block text-black dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              placeholder="Enter your email"
              onChange={(e) =>
                dispatch(
                  handleLoginInputChange({
                    name: e.target.name,
                    value: e.target.value,
                  }),
                )
              }
              className="disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input w-full rounded-md border-[1.5px] border-black-4 bg-transparent px-2 py-2 outline-none transition focus:border-green active:border-green disabled:cursor-default dark:focus:border-primary"
            />
          </div>
          <div className="relative my-4">
            <label
              htmlFor="pass"
              className="mb-1 block text-black dark:text-white"
            >
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              required
              name="pass"
              value={pass}
              id="pass"
              placeholder="Enter your email"
              onChange={(e) =>
                dispatch(
                  handleLoginInputChange({
                    name: e.target.name,
                    value: e.target.value,
                  }),
                )
              }
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
          <div className="my-6 flex justify-between">
            <div>
              <label
                htmlFor="checkboxLabelTwo"
                className="text-body flex cursor-pointer select-none items-center"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="checkboxLabelTwo"
                    className="sr-only"
                    onChange={() => {
                      setIsChecked(!isChecked);
                    }}
                  />
                  <div
                    className={`mr-1 flex h-4 w-4 items-center justify-center rounded border ${
                      isChecked && "border-green bg-green dark:bg-transparent"
                    }`}
                  >
                    <span
                      className={`opacity-0 ${isChecked && "!opacity-100"}`}
                    >
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                          fill="#fff"
                          stroke="#fff"
                          strokeWidth="0.6"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                Remember Me
              </label>
            </div>
            <Link className="text-green underline">Forgot password?</Link>
          </div>
          <button
            type="submit"
            disabled={loginUserRes.isLoading}
            className={`${
              loginUserRes.isLoading ? "bg-black-3" : "bg-green"
            } transition-three w-full rounded-md border-[1px] border-white py-2 text-white hover:border-black`}
          >
            Sign in
          </button>
          <div className="flex justify-around gap-2">
            {roles.map((role, index) => (
              <div key={index} className="mb-4 mt-6 flex justify-around gap-2">
                <div>
                  <input
                    type="radio"
                    name="designation"
                    id={role}
                    className="hidden"
                    value={role}
                    onChange={(e) =>
                      dispatch(
                        handleLoginInputChange({
                          name: e.target.name,
                          value: e.target.value,
                        }),
                      )
                    }
                  />
                  <label
                    htmlFor={role}
                    className={`transition-three cursor-pointer rounded-md border-[1px] border-green px-3 py-1 hover:bg-green hover:text-white ${
                      designation === role
                        ? "bg-green text-white"
                        : "bg-transparent"
                    }`}
                  >
                    {role}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
