import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  

  // useEffect(()=>{
  //   axiosClient
  //   .get("/auth/profile")
  //   .then((response)=>{
  //     setUser(response.data)
  //     setIsLoading(false);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     setIsLoading(false);
  //   });
  // },[])


  const signin = (data) => {
    axios
      .post("/signin", data)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        // setUser(null)
        setIsLoading(false);
        console.log(err);
      });
  };
  // const signup = (data) => {
  //   axiosClient
  //     .post("/auth/signup", data)
  //     .then((response) => {
  //       setUser(response.data);
  //       setIsLoading(false);
  //       navigate("/profile");
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       console.log(err);
  //     });
  // };

  // const signout = () => {
  //   axiosClient
  //     .post("/auth/signout")
  //     .then((response) => {
  //       setUser(null);
  //       navigate("/signin");
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       console.log(err);
  //     });
  // };

  return (
    <AuthContext.Provider value={{ user, isLoading, signin}}>
      {children}
    </AuthContext.Provider>
  );
}
