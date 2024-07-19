/* eslint-disable react/prop-types */
import CreateFood from "../CreateFood/CreateFood";
import MenuList from "../MenuList/MenuList";



function Menu({ userData }) {
    const userId = userData.id;
    return (
        <>
            <h1>Menu de la semana</h1>
            <section className="createForm">
                <CreateFood userId={userId} />
            </section>
            <section className="menuList">
                <MenuList userData={userId} />
            </section>
        </>
    )
}
export default Menu
