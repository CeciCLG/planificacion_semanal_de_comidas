import { createContext, useState } from "react"

export const foodContext = createContext();

export const useFoodContext = () => {
    const [menu, setMenuFood] = useState([]);

    const filtered = () => {

    }

    return { menu, setMenuFood, filtered };
}