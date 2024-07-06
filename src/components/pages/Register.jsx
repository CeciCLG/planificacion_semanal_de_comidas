import { useState } from "react";
import { getDataFromApi } from "../service/ApiUser";

function Register({ setUserData }) {
    const initial_state = {
        username: "",
        email: "",
        password: ""
    };

    const [userForm, setUser] = useState(initial_state);

    const handleInput = (ev) => {
        setUser({ ...userForm, [ev.target.id]: ev.target.value });
    }

    const handleForm = async (ev) => {
        ev.preventDefault();
        const post = await getDataFromApi(userForm);
        localStorage.setItem("user", JSON.stringify(post));
        setUserData(post);
    }

    return (
        <form onChange={handleInput} onSubmit={handleForm}>
            <label htmlFor="username">Nombre</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" />
            <button>Registrarse</button>
        </form>
    )
}

export default Register
