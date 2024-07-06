import { useState } from "react";
import getDataToApi from "../service/Api";

function Login() {
    const initial_state = {
        username: "",
        email: "",
        password: ""
    };

    const [user, setUser] = useState(initial_state);

    const handleInput = (ev) => {
        setUser({ ...user, [ev.target.id]: ev.target.value });
    }

    const handleForm = async (ev) => {
        ev.preventDefault();
        const post = await getDataToApi(user);
        console.log(post);
    }

    return (
        <form onChange={handleInput} onSubmit={handleForm}>
            <label htmlFor="username">Nombre</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" />
            <button>Inicio de sesión</button>
        </form>
    )
}

export default Login
