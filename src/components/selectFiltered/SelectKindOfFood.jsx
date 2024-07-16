function SelectKindOfWeek({ setSelectFunction }) {

    const handleCollect = (ev) => {
        ev.preventDefault()
        console.log(ev.target.value);
        setSelectFunction(ev.target.value);
    }

    return (
        <form action="" onChange={handleCollect}>
            <select name="dayWeek" id="dayWeek" >
                <option value="">Selecciona tipo de comida</option>
                <option value="desayuno">desayuno</option>
                <option value="almuerzo">almuerzo</option>
                <option value="cena">cena</option>
            </select>
        </form>
    )
}

export default SelectKindOfWeek