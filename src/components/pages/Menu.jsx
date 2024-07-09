/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import CreateFood from "../CreateFood/CreateFood";
import MenuList from "../MenuList/MenuList";



function Menu({ userData }) {
    const userId = userData.id;
    return (
        <section>
            <h2>Menu de la semana</h2>
            <nav>
                <Link to="/filtered">Filtrar comida</Link>
            </nav>
            <article>
                <CreateFood userId={userId} />
            </article>
            <article>
                <MenuList userData={userId} />
            </article>
        </section>
    )
}
export default Menu
