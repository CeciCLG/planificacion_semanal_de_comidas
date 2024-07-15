import { getMenuFood } from "../service/ApiFood";
import { useContext, useState } from "react";
import { foodContext } from "../ContextFood/ContextFood";


function MenuList({ userData }) {
    const initial_state = {
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
        domingo: []
    };

    const context = useContext(foodContext);

    const [listItems, setListItems] = useState(initial_state);

    const dayWeek = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

    async function handleClick(ev) {
        ev.preventDefault();
        const dataFetch = await getMenuFood(userData);
        if (dataFetch) {
            await context.setMenuFood(dataFetch);

            dayWeek.forEach((day) => {
                const filteredArray = context.getFilteredWeek(context.menu, day);
                context.setFilteredWeek(prevState => ({ ...prevState, [day]: filteredArray }));
                const foodData = filteredArray.map((food) => (
                    <li key={food.id}>
                        <h3>{food.name}</h3>
                        <figure>
                            <img src={food.picture} alt={food.name} />
                            <figcaption>
                                <h4>{food.type}</h4>
                                <p>{food.descripcion}</p>
                            </figcaption>
                        </figure>
                    </li>
                ));
                setListItems(prevState => ({ ...prevState, [day]: foodData }));
            });
        }
    }


    return (
        <>
            <button onClick={handleClick}>Desplegar Menu</button>
            <article>
                <h2>Lunes</h2>
                <ul>{listItems.lunes}</ul>
            </article>
            <article>
                <h2>Martes</h2>
                <ul>{listItems.martes}</ul>
            </article>
            <article>
                <h2>Miércoles</h2>
                <ul>{listItems.miercoles}</ul>
            </article>
            <article>
                <h2>Jueves</h2>
                <ul>{listItems.jueves}</ul>
            </article>
            <article>
                <h2>Viernes</h2>
                <ul>{listItems.viernes}</ul>
            </article>
            <article>
                <h2>Sábado</h2>
                <ul>{listItems.sabado}</ul>
            </article>
            <article>
                <h2>Domingo</h2>
                <ul>{listItems.domingo}</ul>
            </article>
        </>
    )
}


export default MenuList
