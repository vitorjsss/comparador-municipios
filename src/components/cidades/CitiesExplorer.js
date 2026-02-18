'use client'
import { useState } from "react";
import CitiesCatalog from "@/components/cidades/CitiesCatalog";
import CitySearch from "./CitySearch";

function CitiesExplorer() {
    const [selectedState, setSelectedState] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div div className="flex flex-col md:flex-row gap-6 w-full bg-white p-6 rounded-xl shadow-sm mb-6">
                <CitySearch
                    selectedState={selectedState} setSelectedState={setSelectedState} searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                />
            </div>
            {selectedState && (
                <CitiesCatalog
                    stateId={selectedState.id}
                    searchTerm={searchTerm}
                />
            )}
        </div>
    )
}

export default CitiesExplorer
