import { useContext, useState } from "react";
import { foodContext } from "../ContextFood/ContextFood";
import SelectWeekDay from "../selectWeekDay/SelectWeekDay";


function Filtered() {
    const context = useContext(foodContext);

    const initial_state = {
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
        domingo: []
    }

    const [filteredWeek, setFilteredWeek] = useState(initial_state)


    const [dayWeek, setDayWeek] = useState("");

    const handleFilter = (ev) => {

        ev.preventDefault()

        const arrayFood = context.menu;

        const filteredArray = context.getFilteredWeek(arrayFood, dayWeek);

        if (dayWeek === "lunes") {
            setFilteredWeek({ ...filteredWeek, lunes: filteredArray });

        } else if (dayWeek === "martes") {
            setFilteredWeek({ ...filteredWeek, martes: filteredArray });

        } else if (dayWeek === "miercoles") {
            setFilteredWeek({ ...filteredWeek, miercoles: filteredArray });

        } else if (dayWeek === "jueves") {
            setFilteredWeek({ ...filteredWeek, jueves: filteredArray });

        } else if (dayWeek === "viernes") {
            setFilteredWeek({ ...filteredWeek, viernes: filteredArray });

        } else if (dayWeek === "sabado") {
            setFilteredWeek({ ...filteredWeek, sabado: filteredArray });

        } else if (dayWeek === "domingos") {
            setFilteredWeek({ ...filteredWeek, domingos: filteredArray });

        }
    };

    return (
        <form>
            <SelectWeekDay setSelectFunction={setDayWeek} />
            <button onClick={handleFilter}>Filtrar</button>
        </form>
    )
}

export default Filtered
