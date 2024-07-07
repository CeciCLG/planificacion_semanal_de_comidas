import { useState } from "react";
import { getUserData } from "../service/ApiUser";
import FailRegister from "../failRegister.jsx/FailRegister";
import { Link, Navigate } from "react-router-dom";


function Login({ setUserData }) {
    const initial_state = {
        username: "",
        email: "",
        password: ""
    };

    const [userForm, setUser] = useState(initial_state);

    const [registerDisplay, setRegisterDisplay] = useState("notDisplay");

    const handleInput = (ev) => {
        setUser({ ...userForm, [ev.target.id]: ev.target.value });
    }

    const handleForm = async (ev) => {
        ev.preventDefault();
        const get = await getUserData();
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
            setRegisterDisplay("notDisplay");
        } else {
            setRegisterDisplay("display");
        }
    }

    return (
        <article>
            <FailRegister registerDisplay={registerDisplay} />
            <form onChange={handleInput} onSubmit={handleForm}>
                <label htmlFor="username">Nombre</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" />
                <button>Iniciar sesión</button>
                <Link to="/register">Register</Link>
            </form>
        </article>
    )
}

export default Login
