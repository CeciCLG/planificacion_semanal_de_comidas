import { useState } from "react";

function CreateFood() {

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

        console.log(`${id} ${value}`);
        setOneFood({ ...oneFood, [id]: value });
    }

    return (
        <form onChange={handleCreate}>
            <label htmlFor="name">¿Qué vas a comer hoy?</label>
            <input type="text" name="name" id="name" placeholder="nombre de la comida" />

            <label htmlFor="">Dale una descripción a la comida</label>
            <input type="text" name="description" id="descripcion" placeholder="Descripción" />

            <label htmlFor="type">¿Qué tipo de comida vas a comer?</label>
            <input type="text" name="type" id="type" placeholder="Indica el tipo de comida" />

            <label htmlFor="picture">¿Como se ve?</label>
            <input type="text" name="picture" id="picture" placeholder="Añade una imagen de la comida" />

            <label htmlFor="day">¿En qué día lo vas a comer?</label>
            <input type="text" name="day" id="day" placeholder="Indica el día en que vas a comerla comida" />

            <button>Crear nueva comida</button>
        </form>
    )
}

export default CreateFood
