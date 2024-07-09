import { getMenuFood } from "../service/ApiFood";
import { useContext, useState } from "react";
import { foodContext } from "../ContextFood/ContextFood";


function MenuList({ userData }) {
    const context = useContext(foodContext);

    const [listItems, setListItems] = useState([]);

    async function handleClick(ev) {
        ev.preventDefault();
        const dataFetch = await getMenuFood(userData);

        if (dataFetch) {
            context.setMenuFood(dataFetch);
            let arrayFoodData = context.menu
            console.log(arrayFoodData);
            const foodData = arrayFoodData.map((food) => {
                return <li key={food.id}>
                    <h3>{food.name}</h3>
                    <figure>
                        <img src={food.picture} alt={food.name} />
                        <figcaption>
                            <h4>{food.type}</h4>
                            <p>{food.descripcion}</p>
                        </figcaption>
                    </figure>
                </li>
            });

            return setListItems([...listItems, foodData])
        } else {
            const foodData = <li>
                <p>No tienes comidas guardadas</p>
            </li>;
            return setListItems([...listItems, foodData])
        }

    }


    return (
        <>
            <button onClick={handleClick}>Desplegar Menu</button>
            <ul>{listItems}</ul>
        </>
    )
}

export default MenuList
