import React from 'react'

function LoginForm() {
  return (
    <div
    className="w-[300px] h-[600px] rounded-sm bg-no-repeat bg- bg-center relative bg-[length:100%_100%] flex flex-col items-center justify-center p-6 bg-white"
    style={{
      backgroundImage: "url('/img/login-page/cadreForm.png')",
    }}
  >
    <div className="flex flex-col items-center text-[#b98d44]">
      {/* Logo */}
      <img src="/img/login-page/LogoGondorChic.png" alt="logo"/>

      {/* Titre */}
      <p className="text-center mt-4 font-semibold">
        Connectez-vous avec <br /> votre compte
      </p>
    </div>

    {/* Formulaire */}
    <form className="flex flex-col w-full mt-6 gap-4">
      <div className="flex flex-col">
        <label className="text-[#b98d44] font-semibold font-inknut">Pseudo</label>
        <input
          type="text"
          className="border border-[#b98d44] bg-[#e7e3d9] p-2"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[#b98d44] font-semibold">Mot de passe</label>
        <input
          type="password"
          className="border border-[#b98d44] bg-[#e7e3d9] p-2"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-[#3c2e1e] text-[#f6c669] font-semibold py-2"
      >
        S’identifier
      </button>
    </form>
  </div>
  )
}

export default LoginForm