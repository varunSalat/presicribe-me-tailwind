import { LoginBgImg } from "../../assets";

const LoginBg = () => {
  return (
    <img
      src={LoginBgImg}
      className="w-screen fixed left-0 top-0 -z-1"
      alt="login-bg"
    />
  );
};

export default LoginBg;
