import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Menu</Link ></li>
                <li><Link to="/filtered">Filtered</Link></li>
                <li><Link to="/login">login</Link></li>
            </ul>
        </header>
    )
}

export default Header