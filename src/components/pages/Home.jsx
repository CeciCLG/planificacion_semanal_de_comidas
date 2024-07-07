import { Link } from "react-router-dom"


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/MyProfile">Mi perfil</Link></li>
            </ul>
        </div>
    )
}

export default Home
