import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router";
import toast from "react-hot-toast";
import "./style.css"

const Register = ({setUser}) => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Name Required"),
        ra: yup.string().required("RA required"),
    })

    const {register,handleSubmit,formState: { errors }} = useForm({ resolver: yupResolver(formSchema) });
    
    
    const onSubmit = (data) => {
        
        setUser(data)
        toast.success("Register Success")
        history.push("/home")
    }
    
    return(

        <div className="registerPage">
            <button className="loginButton" onClick={() => history.push("/")}>Login</button>

            <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>
                <input placeholder="Name" {...register("name")} required/>
                    <span>{errors.name?.message}</span>
                <input placeholder="RA (registro acadêmico)" type="number"{...register("ra")} required/>
                    <span>{errors.ra?.message}</span>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;