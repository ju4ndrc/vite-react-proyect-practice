import { Navigate } from "react-router";
import { useAuthStore } from "../store/authStore.js";


export default function ProtectedRoute({children, redirectTo='/login'}){
    const {isLoggedIn} = useAuthStore()
    if(!isLoggedIn){
        return <Navigate to={redirectTo} replace></Navigate>
    }
    return children
}