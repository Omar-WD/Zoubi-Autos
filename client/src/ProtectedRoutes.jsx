import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './context/AuthProvider'

export default function ProtectedRoutes() {
    const {user,isLoading}=useContext(AuthContext)
    if(isLoading){
        return <p>Loading...</p>
    }
    if(!isLoading && !user){
        return <Navigate to="/signin"/>
    }
    if (!isLoading && user){
        return (
          <div>
            <Outlet/>
          </div>
        )
    }
}
