import { Navigate } from "react-router-dom";
import { isLogin } from "../Utils/loginFunction";
const PrivateRoute=({component:Component})=>{
    if(!isLogin()){
        return (<Navigate to='/login'/>)
    }
    return (Component)
}
export default PrivateRoute;