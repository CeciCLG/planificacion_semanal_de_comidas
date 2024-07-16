

function SelectWeekDay({ setSelectFunction }) {

    const handleCollect = (ev) => {
        ev.preventDefault()
        console.log(ev.target.value);
        setSelectFunction(ev.target.value);
    }

    return (
        <form action="" onChange={handleCollect}>
            <select name="dayWeek" id="dayWeek" >
                <option value="">Selecciona día</option>
                <option value="lunes">Lunes</option>
                <option value="martes">Martes</option>
                <option value="miercoles">Miercoles</option>
                <option value="jueves">Jueves</option>
                <option value="viernes">Viernes</option>
                <option value="sabado">Sabado</option>
                <option value="domingo">Domingo</option>
            </select>
        </form>
    )
}

export default SelectWeekDay
