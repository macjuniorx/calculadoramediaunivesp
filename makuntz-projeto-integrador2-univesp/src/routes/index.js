import { Route, Switch } from "react-router";
import HomeṔage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const Routes = () => {


    return (
        <Switch>
            <Route exact path="/">
                <HomeṔage/>
            </Route>
            <Route exact path="/register">
                <RegisterPage/>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
        </Switch>
    )
}

export default Routes;