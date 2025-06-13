import React from "react";
import DailyProduct from "../components/Login/DailyProduct";

function HomePage() {
  return (
    <div
      className="grid items-center w-screen h-screen grid-cols-12 px-8 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url("/img/login-page/bgLoginPage.png")' }}
    >
      {/* <LoginForm />
      <DailyProduct /> */}
      {/* Formulaire */}
      <div className="flex justify-center col-span-4">Custom page</div>

      {/* Produit du jour */}
      <div className="flex justify-center h-screen col-span-8">
        <DailyProduct />
      </div>
    </div>
  );
}

export default HomePage;
