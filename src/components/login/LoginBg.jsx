import { LoginBgImg } from "../../assets";

const LoginBg = () => {
  return (
    <img
      src={LoginBgImg}
      className="fixed left-0 top-0 -z-1 h-screen w-screen"
      alt="login-bg"
    />
  );
};

export default LoginBg;
