'use client'
import { useCities } from "../hooks/useCities";
import { useStatePopulations } from "../hooks/useStatePopulations";
import { useStateIncomeSummaries } from "../hooks/useStateIncomeSummaries";
import { useMemo } from "react";
import Link from "next/link";
import Loading from "@/app/loading";

function CitiesCatalog({ stateId, searchTerm }) {
    const { data: cities, isLoading: loadingCities } = useCities(stateId);
    const { data: populations, isLoading: loadingPopulations } = useStatePopulations(stateId);
    const { data: incomes, isLoading: loadingIncomes } = useStateIncomeSummaries(stateId);

    const filteredCities = useMemo(() => {
        if (!cities) return [];
        if (!searchTerm) return cities;

        return cities.filter(city =>
            city.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [cities, searchTerm]);

    const isLoading = loadingCities || loadingPopulations || loadingIncomes;

    if (isLoading) {
        return (
            <Loading />
        );
    }

    if (!filteredCities || filteredCities.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-primary-600">Nenhuma cidade encontrada.</p>
            </div>
        );
    }

    const formatNumber = (num) => {
        if (!num) return 'N/A';
        return new Intl.NumberFormat('pt-BR').format(num);
    };

    const formatCurrency = (num) => {
        if (!num) return 'N/A';
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(num);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
            {filteredCities.map(city => (
                <div key={city.id} className="p-6 bg-white rounded-xl shadow-sm flex flex-col hover:shadow-md transition-shadow">
                    <h4 className="text-primary-800 font-semibold text-lg">{city.label}</h4>
                    <h3 className="text-gray-700 font-normal text-bold text-md mb-4">{city.uf}</h3>

                    <div className="flex flex-row justify-between gap-4 mb-2">
                        <p className="text-primary-600 text-sm">População:</p>
                        <p className="text-primary-800 font-semibold text-sm">
                            {formatNumber(populations?.[city.id])}
                        </p>
                    </div>

                    <div className="flex flex-row justify-between gap-4 mb-4">
                        <p className="text-primary-600 text-sm">Renda média mensal:</p>
                        <p className="text-primary-800 font-semibold text-sm">
                            {formatCurrency(incomes?.[city.id])}
                        </p>
                    </div>

                    <Link href={`/estado/${stateId}/cidade/${city.id}`} className="mt-4 p-2 text-sm bg-primary-600 text-white hover:bg-primary-700 font-medium rounded-md transition-colors text-center">
                        Ver Detalhes
                    </Link>
                </div>
            ))
            }
        </div >
    )
}

export default CitiesCatalog