import { useContext, useState } from "react";
import { foodContext } from "../ContextFood/ContextFood";
import SelectKindOfWeek from "../selectFiltered/SelectKindOfFood";

function FilteredType() {

    const context = useContext(foodContext);

    const [foodData, setfoodData] = useState();

    const [kindFood, setkindFood] = useState("");

    const handleFilter = (ev) => {

        ev.preventDefault()

        const arrayFood = context.menu;

        const filteredArray = context.getFilteredType(arrayFood, kindFood);

        context.setFilteredType({ ...context.filteredType, [kindFood]: filteredArray });
        const foodData = filteredArray.map((food) => {
            return <li key={food.id}>
                <h3>{food.name}</h3>
                <p>Día planificado: {food.day}</p>
                <figure>
                    <img src={food.picture} alt={food.name} />
                    <figcaption>
                        <h4>{food.type}</h4>
                        <p>{food.descripcion}</p>
                    </figcaption>
                </figure>
            </li>
        })

        setfoodData([foodData]);
    };

    return (
        <article>
            <form>
                <SelectKindOfWeek setSelectFunction={setkindFood} />
                <button onClick={handleFilter}>Filtrar</button>
            </form>
            <ul className={kindFood}>{foodData}</ul>
        </article>
    )
}

export default FilteredType
