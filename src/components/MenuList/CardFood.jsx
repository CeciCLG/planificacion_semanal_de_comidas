import { useContext, useState } from "react";
import { foodContext } from "../ContextFood/ContextFood";


function CardFood() {
    const context = useContext(foodContext);

    //creamos variable de estado
    const [listItems, setListItems] = useState();

    //recojemos el array sobre el que vamos a iterar y comprobamos que tenga contenido

    if (context.menu) {
        const foodData = context.menu.map((food) => {
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

        setListItems([foodData])
    }



    return (
        <ul>{listItems}</ul>
    )
}

export default CardFood
