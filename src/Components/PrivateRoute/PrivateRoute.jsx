import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({children}) => {

    const {user, loading}=useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
   
    if(loading){
        return <span className="loading loading-bars loading-5xl text-amber-600"></span>
    }
    
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRoute; 