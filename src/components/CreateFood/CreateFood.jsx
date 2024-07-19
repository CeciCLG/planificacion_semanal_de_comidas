import { useContext, useState } from "react";
import { foodContext } from "../ContextFood/ContextFood";
import { getpostMenuFood } from "../service/ApiFood";

function CreateFood({ userId }) {
    const context = useContext(foodContext);
    const userIdNum = Number(userId);
    const initial_state = {
        name: "",
        type: "",
        picture: "",
        descripcion: "",
        day: "",
    }

    const [oneFood, setOneFood] = useState(initial_state);

    const handleCreate = (ev) => {
        ev.preventDefault();
        const id = ev.target.id;
        const value = ev.target.value;
        setOneFood({ ...oneFood, [id]: value });
        return oneFood
    }

    const handlePost = async (ev) => {
        ev.preventDefault();
        await getpostMenuFood(userIdNum, oneFood);
        if (context.menu) {
            context.setMenuFood([...context.menu, oneFood]);
        } else {
            context.setMenuFood([oneFood]);
        }
    }

    return (
        <article>
            <h2>Crear una nueva comida</h2>
            <form onChange={handleCreate}>
                <div className="createBox">
                    <div className="createBoxForm">
                        <div>
                            <label htmlFor="name">¿Qué vas a comer hoy?</label>
                        </div>
                        <input type="text" name="name" id="name" placeholder="nombre de la comida" />
                    </div>
                    <div className="createBoxForm">
                        <div>
                            <label htmlFor="descripcion">Dale una descripción a la comida</label>
                        </div>
                        <input type="text" name="description" id="descripcion" placeholder="Descripción" />
                    </div>
                    <div className="createBoxForm">
                        <div>
                            <label htmlFor="type">¿Qué tipo de comida vas a comer?</label>
                        </div>
                        <input type="text" name="type" id="type" placeholder="Indica el tipo de comida" />
                    </div>
                    <div className="createBoxForm">
                        <div>
                            <label htmlFor="picture">¿Como se ve?</label>
                        </div>
                        <input type="text" name="picture" id="picture" placeholder="Añade una imagen de la comida" />
                    </div>
                    <div className="createBoxForm">
                        <div>
                            <label htmlFor="day">¿En qué día lo vas a comer?</label>
                        </div>
                        <input type="text" name="day" id="day" placeholder="Indica el día en que vas a comerla comida" />
                    </div>
                    <button onClick={handlePost}>Crear nueva comida</button>
                </div>
            </form>
        </article>
    )
}

export default CreateFood
