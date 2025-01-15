import React  from "react";
import { Navigate } from "react-router-dom";


function PrivateRoute ({children}){
    const email = localStorage.getItem("email")
    if(email !== null){
        return children;
    }else{
        return <Navigate to={"/"}/>
    }
}
export default PrivateRoute