'use client'
import { useState } from "react";
import StateSelector from "@/features/cities/components/StateSelector";
import CitiesCatalog from "@/features/cities/components/CitiesCatalog";

function CitySearch() {
    const [selectedState, setSelectedState] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col gap-4 items-center justify-center mb-8">
                <div className="flex flex-col sm:flex-row gap-6 w-full bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex-1">
                        <StateSelector
                            value={selectedState}
                            onChange={setSelectedState}
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-primary-700 font-normal mb-2">Buscar Cidade</h3>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Digite o nome da cidade..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-black"
                            disabled={!selectedState}
                        />
                    </div>
                </div>
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

export default CitySearch