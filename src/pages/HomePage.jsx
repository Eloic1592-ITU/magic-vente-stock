import React from "react";
import Basket from "../components/Basket";

function HomePage() {
  return (
    <div
      className="grid items-center w-screen h-screen grid-cols-12 px-8 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url("/img/login-page/bgLoginPage.png")' }}
    >
      <div className="flex justify-center col-span-7">Custom page</div>

      {/* Produit du jour */}
      <div className="flex justify-center col-span-5">
        <Basket />
      </div>
    </div>
  );
}

export default HomePage;
