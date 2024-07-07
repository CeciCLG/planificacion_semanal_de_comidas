import { createContext, useState } from "react"
import { getMenuFood, getpostMenuFood } from "../service/ApiFood";

export const foodContext = createContext();

export const useFoodContext = (user, newFood) => {
    const [menu, setMenuFood] = useState([]);

    const getFood = getMenuFood(user)

    const addFood = getpostMenuFood(user, newFood)

    return { menu, setMenuFood, getFood, addFood };
}