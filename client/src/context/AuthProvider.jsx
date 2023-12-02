import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../axiosClient";
import PropTypes from 'prop-types';
export const AuthContext = createContext();


AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function AuthProvider({children}) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
 


  useEffect(()=>{
    axiosClient
    .get("/user/profile")
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
    axiosClient
      .post("/user/signin", formData, { withCredentials: true })
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
    axiosClient
      .post("/user/signout", null)
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
