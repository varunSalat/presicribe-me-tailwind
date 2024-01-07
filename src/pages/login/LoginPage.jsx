import { LoginForm, LoginBg } from "../../components/login";
import { Header } from "../../layouts";

const LoginPage = () => {
  return (
    <section className="relative h-screen w-screen">
      <Header />
      <LoginBg />
      <LoginForm />
    </section>
  );
};

export default LoginPage;
