import { useState } from "react";

function Login() {
    const initial_state = {
        username: "",
        password: ""
    };

    const [user, setUser] = useState(initial_state);

    const handleInput = (ev) => {
        setUser({ ...user, [ev.target.id]: ev.target.value });
    }

    const handleForm = (ev) => {
        ev.preventDefault();

    }

    return (
        <form onChange={handleInput} onSubmit={handleForm}>
            <label htmlFor="username">Email</label>
            <input type="email" name="username" id="username" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="pass" id="pass" />
            <button>Inicio de sesión</button>
        </form>
    )
}

export default Login
