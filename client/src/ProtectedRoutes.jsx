import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './context/AuthProvider'

export default function ProtectedRoutes() {
    const {user}=useContext(AuthContext)
    // if(isLoading){
    //     return <p>Loading...</p>
    // }
    if( !user){
        return <Navigate to="/signin"/>
    }
    if ( user){
        return (
          <div>
            <Outlet/>
          </div>
        )
    }
}
