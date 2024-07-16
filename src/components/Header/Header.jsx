import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Mi perfil</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/filter">Filtros</Link></li>
            </ul>
        </header>
    )
}

export default Header
