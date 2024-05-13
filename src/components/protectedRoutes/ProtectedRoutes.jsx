import { useContext } from "react";
import { AuthProvider } from "../../provider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoutes = ({children}) => {
    const location=useLocation()
    console.log(location)
    const {user,loading}=useContext(AuthProvider)
    if(loading){
        return <div className="container mx-auto  flex justify-center items-center"><span className="loading loading-ball loading-lg"></span> </div>
    }
    if(user){
        return children
    }


    return  <Navigate state={location?.pathname} to='/login' replace></Navigate>
};

export default ProtectedRoutes;