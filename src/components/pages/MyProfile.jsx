import { getRemoveUser } from "../service/ApiUser";

function MyProfile({ userData }) {
    async function handleRemove() {
        await JSON.parse(localStorage.removeItem("user"));
    }

    async function handleDelete() {
        getRemoveUser(userData);
        await JSON.parse(localStorage.removeItem("user"));

    }

    return (
        <form>
            <button onClick={handleRemove}>Cerrar sesión</button>

            <button onClick={handleDelete}>Eliminar cuenta</button>
        </form>
    )
}

export default MyProfile
