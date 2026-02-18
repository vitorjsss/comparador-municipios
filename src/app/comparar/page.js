import CardsComparacao from "@/components/comparar/CardsComparacao"

function page() {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-gray-900 font-bold text-3xl">Compare Municípios</h1>
            <h3 className="text-gray-700 font-normal text-md">Selecione dois municípios para comparar lado a lado</h3>
            <CardsComparacao />
        </div>
    )
}

export default page