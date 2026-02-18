import CitiesExplorer from "@/components/cidades/CitiesExplorer";

function City() {
    return <div className="flex flex-col gap-4 items-center justify-center min-w-full">
        <h1 className="text-gray-800 font-bold text-3xl">Catálogo de Cidades</h1>
        <h3 className="text-gray-700 font-normal text-md">Explore e compare cidades brasileiras com dados oficiais (IBGE).</h3>
        <CitiesExplorer />
    </div>
}

export default City