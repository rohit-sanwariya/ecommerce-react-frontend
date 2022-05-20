import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import SideImage from './SideImage/SideImage'
import './Login.scss'
const Login:React.FC = () => {
  return (
    <div className="Login w-100">
      <div className="form">
        <LoginForm/>
      </div>
      
        <SideImage/>
       
    </div>
  )
}

export default Login