import { LoginForm, LoginBg } from "../../components/login";
import { Header } from "../../layouts";

const LoginPage = () => {
  return (
    <section className="h-screen w-screen relative">
      <Header />
      <LoginBg />
      <LoginForm />
    </section>
  );
};

export default LoginPage;
