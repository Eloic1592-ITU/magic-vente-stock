import React from 'react'
import LoginForm from '../components/Login/LoginForm';

function LoginPage() {
  return (
    <div className='bg-cover bg-no-repeat bg-center h-screen w-screen flex justify-center items-center' style={{backgroundImage: 'url("/img/login-page/bgLoginPage.png")'}}>
        <LoginForm />
    </div>
  )
}

export default LoginPage;