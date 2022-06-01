import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
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
                <h1>Olá, {user.name}!</h1>
                
                    <label class="labelNota" for="atividades">Nota de Atividades</label>
                    <input placeholder='Insira sua nota' id="atividades" class = "campoNota" type="number" min="0" max="10" onChange={(evt) => setNota1(evt.target.value)} value={nota1}/>
                
                
                    <label class="labelNota" for="prova">Nota de Prova</label>
                    <input placeholder='Insira sua nota' id="prova" class = "campoNota" type="number" min="0" max="10" onChange={(evt) => setNota2(evt.target.value)} value={nota2}/>
                  

                <p>
                <button className="calculateButton" onClick={FinalGrade}>Calcular</button><br/>
                
                <If condition = {notaFinal != null}>
                    <Then>

                    <span>Sua média final é </span>  
                    <span id="notaFinal">{notaFinal}</span>  

                    <If condition = {notaFinal >= 5}>
                       <Then>
                           <p class="mensagem">
                               Parabéns pela aprovação!
                           </p>
                        </Then>
                    <Else>
                        <p class="mensagem">
                            Não desista, ainda dá pra recuperar!
                        </p>
                    </Else>
                    </If>                                                
                    </Then>
                    
                </If>
                
                </p>
            </div>
        </div>
    )
}


export default Home;

//              