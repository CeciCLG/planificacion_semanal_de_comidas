import { getRemoveUser } from "../service/ApiUser";

function MyProfile({ setUserData, userData }) {
    function handleRemove(ev) {
        ev.preventDefault()
        JSON.parse(localStorage.removeItem("user"));
        const dataLocal = JSON.parse(localStorage.getItem("user"));
        setUserData(dataLocal);
    }

    function handleDelete(ev) {
        ev.preventDefault()
        getRemoveUser(userData);
        JSON.parse(localStorage.removeItem("user"));
        const dataLocal = JSON.parse(localStorage.getItem("user"));
        setUserData(dataLocal);
    }

    return (
        <form>
            <button onClick={handleRemove}>Cerrar sesión</button>

            <button onClick={handleDelete}>Eliminar cuenta</button>
        </form>
    )
}

export default MyProfile
