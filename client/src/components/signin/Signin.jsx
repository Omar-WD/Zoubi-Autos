import { useForm } from "react-hook-form";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import "./Signin.css"


export default function Signin() {
  const {  user, signin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
  
    signin(formData);
  };

  if (user) {
    // return <Navigate to="/new" />;
  }

  return (
    <div className="signinDiv">
      <h2 className="signinTitle">Signin</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="signinForm">
        <input placeholder="email" {...register("email", { required: true })} />

        <input
        type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
