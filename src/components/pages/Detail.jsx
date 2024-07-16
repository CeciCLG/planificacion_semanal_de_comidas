import { useContext } from "react"
import { useParams } from "react-router-dom"
import { foodContext } from "../ContextFood/ContextFood";

function Detail() {

    const context = useContext(foodContext);

    const params = useParams();

    const item = context.menu.filter((food) => {
        return food.id === params.id
    })

    const htmlItem = item.map((food) => (
        <section key={food.id}>
            <h1>{food.name}</h1>
            <figure>
                <img src={food.picture} alt={food.name} />
                <figcaption>
                    <h4>{food.type}</h4>
                    <p>{food.descripcion}</p>
                </figcaption>
            </figure>
        </section>
    ))

    return (
        <>
            {htmlItem}
        </>
    )
}

export default Detail
