import { useContext, useState } from "react";
import { foodContext } from "../ContextFood/ContextFood";
import SelectWeekDay from "../selectWeekDay/SelectWeekDay";

function Filtered() {
    const context = useContext(foodContext);

    const [foodData, setfoodData] = useState();

    const [dayWeek, setDayWeek] = useState("");

    const handleFilter = (ev) => {

        ev.preventDefault()

        const arrayFood = context.menu;

        const filteredArray = context.getFilteredWeek(arrayFood, dayWeek);

        context.setFilteredWeek({ ...context.filteredWeek, [dayWeek]: filteredArray });
        const foodData = filteredArray.map((food) => {
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
        })

        setfoodData([foodData]);
    };

    return (
        <>
            <form>
                <SelectWeekDay setSelectFunction={setDayWeek} />
                <button onClick={handleFilter}>Filtrar</button>
            </form>
            <ul className={dayWeek}>{foodData}</ul>
        </>
    )
}

export default Filtered
