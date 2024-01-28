import { Route } from "react-router-dom";
import AuthGuard from "../guards/AuthGuards";
import CarsCatalog from "../pages/CarsCatalog/CarsCatalog";

const AuthRoutes = [
    <Route key="Welcome" path="/" element={<AuthGuard component={<CarsCatalog />} />} />
]

export default AuthRoutes;
