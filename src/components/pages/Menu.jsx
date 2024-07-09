/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import CreateFood from "../CreateFood/CreateFood";
import { useContext, useEffect } from "react";
import { foodContext } from "../ContextFood/ContextFood";



function Menu({ userData }) {
    const context = useContext(foodContext);
    const userId = userData.id;
    useEffect(() => {
        async function getMenuFood(userData) {
            try {
                const dataFetchApi = await fetch(`https://66897e2a0ea28ca88b88240e.mockapi.io/api/food/${userData.id}/menu`, {
                    method: 'GET',
                    headers: { 'content-type': 'application/json' }
                });
                if (dataFetchApi) {
                    const dataMenu = dataFetchApi.json();
                    return context.setMenuFood(...context.menu, dataMenu);
                } else {
                    return []
                }

            } catch (error) {
                console.log(error);
            }

        }
        const userId2 = userData.id;
        getMenuFood(userId2)
    }, []);

    console.log(context.menu);
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

            </article>
        </section>
    )
}
export default Menu
