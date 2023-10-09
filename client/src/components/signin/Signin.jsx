import { useForm } from "react-hook-form";

import axios from "axios";



export default function Signin() {

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
  .then((response)=>console.log(response.data))
  .catch((error)=>console.log(error))
};
 

  


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
