import { useState } from "react";
import { getUserData } from "../service/ApiUser";


function Login({ setUserData }) {
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
        const get = await getUserData();
        console.log(get);
        const userFiltered = get.filter((user) => {
            const name = user.username.toUpperCase();
            const nameForm = userForm.username.toUpperCase();
            return name === nameForm && user.email === userForm.email && user.password === userForm.password
        })
        const [userCorrect] = userFiltered;
        //comprobar que sí existe
        if (userCorrect) {
            localStorage.setItem("user", JSON.stringify(userCorrect));
            setUserData(userCorrect);
        } //falta estableces lo que pasa cuando no existe
    }

    return (
        <form onChange={handleInput} onSubmit={handleForm}>
            <label htmlFor="username">Nombre</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" />
            <button>Iniciar sesión</button>
        </form>
    )
}

export default Login
