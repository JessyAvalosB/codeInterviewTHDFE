import { Route } from "react-router-dom";
import UnAuthGuard from "../guards/UnAuthGuards";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

const UnAuthRoutes = [
    <Route key="SignIn" path="/signIn" element={<UnAuthGuard component={<Login />} />} ></Route>,
    <Route key="SignUp" path="/signUp" element={<UnAuthGuard component={<SignUp />} />} > </Route>
]

export default UnAuthRoutes;
