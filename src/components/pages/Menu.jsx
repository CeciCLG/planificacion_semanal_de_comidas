/* eslint-disable react/prop-types */
import CreateFood from "../CreateFood/CreateFood";
import MenuList from "../MenuList/MenuList";
import Filtered from "./Filtered";



function Menu({ userData }) {
    const userId = userData.id;
    return (
        <>
            <h2>Menu de la semana</h2>
            <section>
                <Filtered />
            </section>
            <section>
                <CreateFood userId={userId} />
            </section>
            <section>
                <MenuList userData={userId} />
            </section>
        </>
    )
}
export default Menu
