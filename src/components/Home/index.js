import { useHistory } from "react-router-dom"
import { useState } from "react"
import toast from "react-hot-toast"
import "./style.css"

const Home = ({user}) => {
    const history = useHistory()
    
    const [nota1, setNota1] = useState()
    const [nota2, setNota2] = useState()
    const [notaFinal, setNotaFinal] = useState()

    const logout = () => {

        localStorage.clear()
        history.push("/")
        toast.error("Logout Success")
    }

    const FinalGrade = () => {

       const result = ((parseFloat(nota1) * 0.4) + (parseFloat(nota2) * 0.6))

       setNotaFinal(result.toFixed(1))
    }
    
    return(

        <div className="homePage">
            <header>
                <button className="logoutButton" onClick={() => logout()}>Logout</button>
            </header>
            <div className="inputNotas">
                <h1>Welcome, {user.name}</h1>
                <p>Nota Atividade:</p><input type="number" onChange={(evt) => setNota1(evt.target.value)} value={nota1}/>
                <p>Nota Prova:</p><input type="number" onChange={(evt) => setNota2(evt.target.value)} value={nota2}/>
                <button className="calculateButton" onClick={FinalGrade}>calculate</button>
                <p>Média Final: <span>{notaFinal}</span></p>
            </div>
        </div>
    )
}

export default Home;



