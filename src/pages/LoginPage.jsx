import DailyProduct from "../components/Login/DailyProduct";
import LoginForm from "../components/Login/LoginForm";

function LoginPage() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen w-screen grid grid-cols-12 items-center px-8"
      style={{ backgroundImage: 'url("/img/login-page/bgLoginPage.png")' }}
    >
      {/* <LoginForm />
      <DailyProduct /> */}
      {/* Formulaire */}
      <div className="col-span-4 flex justify-center">
        <LoginForm />
      </div>

      {/* Produit du jour */}
      <div className="col-span-8 flex justify-center h-screen flex items-center">
        <DailyProduct />
      </div>
    </div>
  );
}

export default LoginPage;
