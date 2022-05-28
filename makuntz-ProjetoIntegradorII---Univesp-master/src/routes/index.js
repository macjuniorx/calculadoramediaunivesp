import { useState } from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Routes = () => {

    const [user, setUser] = useState()

    return (
        <Switch>
            <Route exact path="/">
                <LoginPage setUser={setUser}/>
            </Route>
            <Route path="/register">
                <RegisterPage setUser={setUser}/>
            </Route>
            <Route path="/home">
                <HomePage user={user}/>
            </Route>
        </Switch>
    )
}

export default Routes;