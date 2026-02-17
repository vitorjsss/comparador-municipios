'use client'

import Select from "react-select";
import { useCities } from "../hooks/useCities";

function CitySelector({ stateId }) {
    const { data: cities, isLoading } = useCities(stateId);

    return (
        <div >
            <h3 className="text-primary-700 font-normal">Buscar Cidade</h3>
            <Select
                options={cities || []}
                isLoading={isLoading}
                placeholder="Selecione uma cidade..."
            />
        </div>
    )
}

export default CitySelector