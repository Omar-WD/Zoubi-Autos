import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
 


  useEffect(()=>{
    axios
    .get("http://localhost:3005/user/profile", {
      withCredentials: true,
    })
    .then((response)=>{
      setUser(response.data)
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
  },[])

  const signin = (formData) => {
    axios
      .post("http://localhost:3005/user/signin", formData,{
        withCredentials: true
      })
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
        
        navigate("/new")
      })

      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const signout = () => {
    setIsLoading(false);
    axios
      .post("http://localhost:3005/user/signout", null, {
        withCredentials: true,
      })
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        setUser(null);
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
