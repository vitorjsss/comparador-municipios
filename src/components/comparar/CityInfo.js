import Spinner from "@/components/Spinner";

import { usePopulation } from "@/hooks/usePopulation";
import { useIncomeSummary } from "@/hooks/useIncomeSummary";
import { useEmploymentRate } from "@/hooks/useEmploymentRate";
import { useSewageSummary } from "@/hooks/useSewageSummary";
import { useWaterNetworkCoverage } from "@/hooks/useWaterNetworkCoverage";
import { useUrbanSurroundingCoverage } from "@/hooks/useUrbanSurroundingCoverage";
import { useCityInfo } from "@/hooks/useCityInfo";

function CityInfo({ cityId, stateId, setCityId, setStateId }) {
    const { data: population, isLoading: isPopulationLoading } = usePopulation(cityId);
    const { data: incomeSummary, isLoading: isIncomeLoading } = useIncomeSummary(cityId);
    const { data: employmentRate, isLoading: isEmploymentRateLoading } = useEmploymentRate(cityId);
    const { data: sewageSummary, isLoading: isSewageSummaryLoading } = useSewageSummary(cityId);
    const { data: waterNetworkCoverage, isLoading: isWaterNetworkCoverageLoading } = useWaterNetworkCoverage(cityId);
    const { data: urbanSurroundingCoverage, isLoading: isUrbanSurroundingCoverageLoading } = useUrbanSurroundingCoverage(cityId);
    const { data: cityInfo, isLoading: isCityInfoLoading } = useCityInfo(cityId, stateId);

    const cityData = {
        name: cityInfo?.nomeCidade || 'Cidade não encontrada',
        state: `${cityInfo?.nomeCidade || 'Cidade não encontrada'} (${cityInfo?.uf || 'UF não encontrada'})`,
        incomeSummary: incomeSummary,
        employmentRate: employmentRate,
        sewageSummary: sewageSummary,
        waterNetworkCoverage: waterNetworkCoverage,
        urbanSurroundingCoverage: urbanSurroundingCoverage,
        population: population,
        uf: cityInfo?.uf || 'UF não encontrada',
    };

    if (!cityId || isPopulationLoading || isIncomeLoading || isEmploymentRateLoading || isSewageSummaryLoading || isWaterNetworkCoverageLoading || isUrbanSurroundingCoverageLoading || isCityInfoLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col gap-4">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-lg shadow-md relative">
                <button
                    onClick={() => {
                        setCityId(null);
                        setStateId(null);
                    }}
                    className="absolute top-2 right-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full w-6 h-6 flex items-center justify-center transition-all duration-200"
                    title="Remover cidade"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <h2 className="text-xl font-bold">{cityData.name}</h2>
                <p className="text-sm opacity-90">{cityData.uf}</p>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 overflow-y-auto">
                {/* Informações Gerais */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                        Informações Gerais
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">População</p>
                            <p className="text-lg font-semibold text-gray-900">
                                {Number(cityData.population).toLocaleString('pt-BR')}
                            </p>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Renda Média</p>
                            <p className="text-lg font-semibold text-gray-900">
                                R$ {Number(cityData.incomeSummary).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </p>
                            <p className="text-xs text-gray-500">por mês</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Taxa de Ocupação</p>
                            <p className="text-lg font-semibold text-gray-900">
                                {Number(cityData.employmentRate).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%
                            </p>
                            <p className="text-xs text-gray-500">da população empregada</p>
                        </div>
                    </div>
                </div>

                {/* Infraestrutura e Saneamento */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                        Infraestrutura e Saneamento
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Cobertura de Esgoto</p>
                            <p className="text-lg font-semibold text-gray-900">
                                {Number(cityData.sewageSummary).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%
                            </p>
                            <p className="text-xs text-gray-500">da população</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Rede de Água</p>
                            <p className="text-lg font-semibold text-gray-900">
                                {Number(cityData.waterNetworkCoverage).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%
                            </p>
                            <p className="text-xs text-gray-500">da população</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Coleta Urbana</p>
                            <p className="text-lg font-semibold text-gray-900">
                                {Number(cityData.urbanSurroundingCoverage).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%
                            </p>
                            <p className="text-xs text-gray-500">da população urbana</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CityInfo
