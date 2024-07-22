import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDataFromApi } from "../service/ApiUser";

function Register({ setUserData }) {
    const initial_state = {
        username: "",
        email: "",
        password: ""
    };

    const [userForm, setUser] = useState(initial_state);

    const navigate = useNavigate()

    const handleInput = (ev) => {
        setUser({ ...userForm, [ev.target.id]: ev.target.value });
    }

    const handleForm = async (ev) => {
        ev.preventDefault();
        const post = await getDataFromApi(userForm);
        localStorage.setItem("user", JSON.stringify(post));
        setUserData(post);
        navigate('/menu');
    }

    return (
        <section className="login">
            <form onChange={handleInput} onSubmit={handleForm}>
                <div className="box">
                    <div>
                        <label htmlFor="username">Nombre</label>
                    </div>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="box">
                    <div>
                        <label htmlFor="email">Email</label>
                    </div>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="box">
                    <div>
                        <label htmlFor="password">Contraseña</label>
                    </div>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="box">
                    <button type="submit">Registrarse</button>
                    <Link to="/login">Iniciar sesión</Link>
                </div>
            </form>
        </section>
    )
}

export default Register
