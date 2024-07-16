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

    const initial_state_type = {
        desayuno: [],
        almuerzo: [],
        cena: [],
    };

    const [filteredWeek, setFilteredWeek] = useState(initial_state);

    const getFilteredWeek = (menu, dayWeek) => {
        const filteredArray = menu.filter((food) => {
            return food.day === dayWeek
        });
        return filteredArray
    }

    const [filteredType, setFilteredType] = useState(initial_state_type);

    const getFilteredType = (menu, foodType) => {
        console.log(foodType);
        console.log(menu);
        const filteredTypeArray = menu.filter((food) => {
            return food.type === foodType
        });
        return filteredTypeArray
    }

    return { menu, setMenuFood, getFilteredWeek, setFilteredWeek, filteredWeek, filteredType, setFilteredType, getFilteredType };
}