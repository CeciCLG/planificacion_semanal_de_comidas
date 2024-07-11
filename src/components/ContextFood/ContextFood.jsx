import { createContext, useState } from "react"

export const foodContext = createContext();

export const useFoodContext = () => {
    const initial_state = {
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
        domingo: []
    }

    const [menu, setMenuFood] = useState([]);

    const [filteredMenu, setFilteredMenu] = useState(initial_state)

    const filtered = (menu, dayWeek) => {
        const filteredArray = menu.filter((food) => {
            return food.day === dayWeek
        })

        console.log(filteredArray);
        setFilteredMenu({ ...filteredMenu, dayWeek: filteredArray });

    }

    return { menu, setMenuFood, filtered, filteredMenu };
}