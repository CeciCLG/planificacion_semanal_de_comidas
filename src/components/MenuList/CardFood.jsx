import { useContext } from "react";
import { foodContext } from "../ContextFood/ContextFood";


function CardFood() {
    const context = useContext(foodContext);

    let arrayFoodData = context.menu
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

    return (
        <ul>{foodData}</ul>
    )
}

export default CardFood
