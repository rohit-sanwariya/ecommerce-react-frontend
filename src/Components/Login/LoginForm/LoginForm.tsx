import React, { FormEvent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import apiFetch from "../../../Hooks/useFetch";
import "./LoginForm.scss";

export interface LoginFormSchema {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loginForm, setLoginForm] = useState<LoginFormSchema>({
    username: "",
    password: "",
  });

  const onSubmit = async (event: FormEvent) => {
    const form: HTMLFormElement = event.target as HTMLFormElement;
    const map: any = Array.from(form.getElementsByTagName("input")).map(
      (input: HTMLInputElement) => {
        console.log(input.value);        
        return {
          [input.id]: input.value,
        };
      }
    );
     
    const formData = Object.assign({}, ...map);
    console.log(formData);
    setLoginForm((prevState)=>{return {
      ...prevState,
      username: formData.username,
      password: formData.password,
    }});
    console.log(loginForm);
    
    event.preventDefault();
     
      
     
     
  };
  useEffect(() => {
   console.log('state updated');
  const req = async ()=>{
    const res = !!loginForm.username && !!loginForm.password &&  await apiFetch("http://localhost:5000/api/auth/login", loginForm)
    const user = res && await res.json()
    user.accessToken && sessionStorage.setItem("accessToken",user.accessToken)
    
   }
   req()
   
    return () => {
       
    }
  }, [loginForm])
  
  return (
    <div className="LoginForm ">
      {
        sessionStorage.getItem("accessToken") && <Navigate to="/" />
        }
    
      <form className="" onSubmit={(e) => onSubmit(e)}>
        <div className=" ">
          <label htmlFor="" className="form-label ">
            User Name
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="form-control "
          />
        </div>
        <div className="">
          <label htmlFor="" className="form-label ">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control "
          />
        </div>
        <div className="  button-group">
          <button className="btn btn-dark m-3 " type="button">
            Register
          </button>
          <button className="btn btn-dark m-3 " type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
