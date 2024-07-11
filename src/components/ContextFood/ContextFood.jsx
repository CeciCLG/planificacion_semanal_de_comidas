import { createContext, useState } from "react"

export const foodContext = createContext();

export const useFoodContext = () => {

    const [menu, setMenuFood] = useState([]);


    const getFilteredWeek = (menu, dayWeek) => {
        console.log(menu);
        console.log(dayWeek);
        const filteredArray = menu.filter((food) => {
            return food.day === dayWeek
        });

        return filteredArray
    }

    return { menu, setMenuFood, getFilteredWeek };
}