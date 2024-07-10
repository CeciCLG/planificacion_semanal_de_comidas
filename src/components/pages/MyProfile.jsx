import UseForceUpdate from "../forceUpdate/ForceUpdate";
import { getDeleteUserMenu } from "../service/ApiFood";
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
        await getDeleteUserMenu(userData.id);
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
