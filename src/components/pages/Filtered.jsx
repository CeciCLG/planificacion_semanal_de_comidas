import FilteredDays from "../Filtered/FilteredDays"
import FilteredType from "../Filtered/FilteredType"

function Filtered() {

    return (
        <section>
            <div>
                <h1>Filtros</h1>
                <div className="filtereds">
                    <FilteredDays />
                    <FilteredType />
                </div>
            </div>
        </section>
    )
}

export default Filtered
