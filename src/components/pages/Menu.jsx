import { Link } from "react-router-dom"
import CreateFood from "../CreateFood/CreateFood";
import { useFoodContext, foodContext } from "../ContextFood/ContextFood";


function Menu({ userData }) {
    const contextFood = useFoodContext();
    return (
        <section>
            <h2>Menu de la semana</h2>
            <nav>
                <Link to="/filtered">Filtrar comida</Link>
            </nav>
            <foodContext.Provider value={contextFood}>
                <article>
                    <CreateFood />
                </article>
            </foodContext.Provider>
        </section>
    )
}

export default Menu
