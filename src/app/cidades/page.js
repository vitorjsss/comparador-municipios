import CitySearch from "@/features/cities/components/CitySearch";

function City() {
    return <div className="flex flex-col gap-4 items-center justify-center min-w-full">
        <h1 className="text-primary-700 font-bold text-3xl">Catálogo de Cidades</h1>
        <h3 className="text-primary-600 font-normal text-md">Explore e compare cidades brasileiras com dados oficiais (IBGE).</h3>
        <CitySearch />
    </div>
}

export default City