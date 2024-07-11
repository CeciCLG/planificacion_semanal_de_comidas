import { useContext } from "react";
import { foodContext } from "../ContextFood/ContextFood";


function Filtered() {
    const context = useContext(foodContext);

    const handleFilter = () => {
        const dayWeek = "Lunes";
        const arrayFood = context.menu;

        context.filtered(arrayFood, dayWeek)

    };

    return (
        <div>
            <button onClick={handleFilter}>Filtrar</button>
        </div>
    )
}

export default Filtered
