import UseForceUpdate from "../forceUpdate/ForceUpdate";
import { getRemoveUser } from "../service/ApiUser";


function MyProfile({ userData, setUserData }) {
    async function handleRemove() {
        await JSON.parse(localStorage.removeItem("user"));
    }

    async function handleDelete(ev) {
        ev.preventDefault();
        await getRemoveUser(userData);
        await setUserData(null);
        await JSON.parse(localStorage.removeItem("user"));

        UseForceUpdate();
    }

    return (
        <form>
            <button onClick={handleRemove}>Cerrar sesión</button>

            <button onClick={handleDelete}>Eliminar cuenta</button>
        </form>
    )
}

export default MyProfile
