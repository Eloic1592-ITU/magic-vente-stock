import DailyProduct from "../components/Login/DailyProduct";
import LoginForm from "../components/Login/LoginForm";

function LoginPage() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen w-screen flex justify-around items-center "
      style={{ backgroundImage: 'url("/img/login-page/bgLoginPage.png")' }}
    >
      <LoginForm />
      <DailyProduct />
    </div>
  );
}

export default LoginPage;
