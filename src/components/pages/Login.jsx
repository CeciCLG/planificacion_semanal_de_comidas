import { useState } from "react";
import { getUserData } from "../service/ApiUser";
import FailRegister from "../failRegister.jsx/FailRegister";
import { Link, useNavigate } from "react-router-dom";


function Login({ setUserData }) {
    const initial_state = {
        username: "",
        email: "",
        password: ""
    };

    const [userForm, setUser] = useState(initial_state);

    const [registerDisplay, setRegisterDisplay] = useState("notDisplay");

    const navigate = useNavigate()

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

        if (userCorrect) {
            localStorage.setItem("user", JSON.stringify(userCorrect));
            setUserData(userCorrect);
            setRegisterDisplay("notDisplay");
            navigate('/menu');
        } else {
            setRegisterDisplay("display");
        }
        ev.target.reset
    }

    return (
        <div>

            <section className="login">
                <FailRegister registerDisplay={registerDisplay} />
                <form onChange={handleInput} onSubmit={handleForm}>
                    <div className="box">
                        <div className="label">
                            <label htmlFor="username">Nombre</label>
                        </div>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className="box">
                        <div className="label">
                            <label htmlFor="email">Email</label>
                        </div>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="box">
                        <div className="label">
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="box">
                        <button type="submit">Iniciar sesión</button>
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Login
