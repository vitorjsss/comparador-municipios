'use client'
import StateSelector from "@/components/cidades/StateSelector";

function CitySearch({ selectedState, setSelectedState, searchTerm, setSearchTerm }) {
    return (
        <>
            <div className="flex-1">
                <StateSelector
                    value={selectedState}
                    onChange={setSelectedState}
                />
            </div>
            <div className="flex-2">
                <h3 className="text-gray-700 font-semibold mb-2">Buscar Cidade</h3>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Digite o nome da cidade..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-black"
                    disabled={!selectedState}
                />
            </div>
        </>
    )
}

export default CitySearch