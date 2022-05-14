import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {

    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Name Required"),
        ra: yup.string().required("RA required"),
    })

    const onSubmit = () => {

        history.push("/login")
        toast.success("Register Success")
    }

    const {register,handleSubmit,formState: { errors }} = useForm({ resolver: yupResolver(formSchema) });

    return(
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name")} required/>
                    <span>{errors.name?.message}</span>
                <input placeholder="RA(registro academico)" type="number"{...register("ra")} required/>
                    <span>{errors.ra?.message}</span>

                <button type="submit">Register</button>
            </form>

            <button onClick={history.push("/login")}>Login</button>
        </div>
    )
}

export default Register;