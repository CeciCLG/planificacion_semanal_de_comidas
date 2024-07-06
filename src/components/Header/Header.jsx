import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Menu</Link ></li>
                <li><Link to="filtered">Filtered</Link></li>
            </ul>
        </header>
    )
}

export default Header
