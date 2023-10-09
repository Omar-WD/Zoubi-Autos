import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";




export default function Signin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);



  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData={
      email: data.email,
      password:data.password
    }
    console.log(formData);

  axios
  .post("http://localhost:3005/user/signin", formData,{
    withCredentials: true
  })
  .then((response)=>{console.log(response.data);
    setIsAuthenticated(true)})
  .catch((error)=>console.log(error))
};
 
if (isAuthenticated) {
  return <Navigate to="/new" />;
}
  


    return (
      <>
        <h2>Signin</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="email"
            {...register("email", { required: true })}
          />

          <input
            placeholder="password"
            {...register("password", { required: true })}
          />

          <input type="submit" />
        </form>
      </>
    );
  }
// }
