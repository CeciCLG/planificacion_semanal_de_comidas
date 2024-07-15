import { createContext, useState } from "react"

export const foodContext = createContext();

export const useFoodContext = () => {

    const [menu, setMenuFood] = useState([]);

    const initial_state = {
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
        domingo: []
    };

    const [filteredWeek, setFilteredWeek] = useState(initial_state);

    const getFilteredWeek = (menu, dayWeek) => {
        const filteredArray = menu.filter((food) => {
            return food.day === dayWeek
        });
        return filteredArray
    }

    return { menu, setMenuFood, getFilteredWeek, setFilteredWeek, filteredWeek };
}