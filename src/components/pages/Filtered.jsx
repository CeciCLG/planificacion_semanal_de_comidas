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

        if (dayWeek === "lunes") {
            context.setFilteredWeek({ ...context.filteredWeek, lunes: filteredArray });
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

            return setfoodData([foodData]);

        } else if (dayWeek === "martes") {
            context.setFilteredWeek({ ...context.filteredWeek, martes: filteredArray });

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

            return setfoodData([foodData]);

        } else if (dayWeek === "miercoles") {
            context.setFilteredWeek({ ...context.filteredWeek, miercoles: filteredArray });
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

            return setfoodData([foodData]);

        } else if (dayWeek === "jueves") {
            context.setFilteredWeek({ ...context.filteredWeek, jueves: filteredArray });
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

            return setfoodData([foodData]);

        } else if (dayWeek === "viernes") {
            context.setFilteredWeek({ ...context.filteredWeek, viernes: filteredArray });
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

            return setfoodData([foodData]);

        } else if (dayWeek === "sabado") {
            context.setFilteredWeek({ ...context.filteredWeek, sabado: filteredArray });
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

            return setfoodData([foodData]);

        } else if (dayWeek === "domingo") {
            context.setFilteredWeek({ ...context.filteredWeek, domingo: filteredArray });

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

            return setfoodData([foodData]);
        }
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
