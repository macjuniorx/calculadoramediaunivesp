import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Name Required"),
        ra: yup.string().required("RA required"),
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema),
      })

    const onSubmit = () => {

        history.push("/home")
        toast.success("Login Success")
    }

    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="RA(Registro Acadêmico)" type="number" {...register("ra")} required/>
                    <span>{errors.ra?.message}</span>
                <input placeholder="Name" {...register("name")} required/>
                    <span>{errors.name?.message}</span> 
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;