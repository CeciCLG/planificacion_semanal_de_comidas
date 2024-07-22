import { Navigate } from "react-router-dom";


function AuthRoute({ user, component }) {
    if (user) {
        return component;
    } else {
        return <Navigate to="/" />
    }

}

export default AuthRoute
