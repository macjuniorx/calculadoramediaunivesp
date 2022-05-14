import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory()

    return(
        <div>
            <button onClick={history.push("/login")}>Login</button>
            <button onClick={history.push("/register")}>Register</button>
        </div>
    )
}

export default Home;