import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import "./style.css"


const Login = ({setUser}) => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Name Required"),
        ra: yup.string().required("RA required"),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema),
      })

    const onSubmit = (data) => {
        
        setUser(data)
        history.push("/home")
        toast.success("Login Success")
        
    }
    
    return(
        
        <div className="loginPage">
            <button className="registerButton" onClick={() => history.push("/register")}>Register</button>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
                <input placeholder="Nome do aluno" {...register("name")} required/>
                    <span>{errors.name?.message}</span> 
                <input placeholder="RA (registro acadêmico)" type="number" {...register("ra")} required/>
                    <span>{errors.ra?.message}</span>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login