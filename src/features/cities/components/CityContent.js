'use client'
import SmallCard from "@/features/cities/components/SmallCard";
import LargeCard from "@/features/cities/components/LargeCard";
import CardRow from "@/features/cities/components/SmallCardRow";
import Spinner from "@/components/Spinner";
import MediumCard from "./MediumCard";
import CommuteChart from "./CommuteChart";
import EducationChart from "./EducationChart";

import { usePopulation } from "../hooks/usePopulation";
import { useIncomeSummary } from "../hooks/useIncomeSummary";
import { useEmploymentRate } from "../hooks/useEmploymentRate";
import { useSewageSummary } from "../hooks/useSewageSummary";
import { useWaterNetworkCoverage } from "../hooks/useWaterNetworkCoverage";
import { useUrbanSurroundingCoverage } from "../hooks/useUrbanSurroundingCoverage";
import { useEducationSummary } from "../hooks/useEducationSummary";
import { useCommuteSummary } from "../hooks/useCommuteSummary";
import { useCityInfo } from "../hooks/useCityInfo";

function CityContent({ cityId, stateId }) {
    const { data: population, isLoading: isPopulationLoading } = usePopulation(cityId);
    const { data: incomeSummary, isLoading: isIncomeLoading } = useIncomeSummary(cityId);
    const { data: employmentRate, isLoading: isEmploymentRateLoading } = useEmploymentRate(cityId);
    const { data: commuteSummary, isLoading: isCommuteSummaryLoading } = useCommuteSummary(cityId);
    const { data: sewageSummary, isLoading: isSewageSummaryLoading } = useSewageSummary(cityId);
    const { data: waterNetworkCoverage, isLoading: isWaterNetworkCoverageLoading } = useWaterNetworkCoverage(cityId);
    const { data: urbanSurroundingCoverage, isLoading: isUrbanSurroundingCoverageLoading } = useUrbanSurroundingCoverage(cityId);
    const { data: educationSummary, isLoading: isEducationSummaryLoading } = useEducationSummary(cityId);
    const { data: cityInfo, isLoading: isCityInfoLoading } = useCityInfo(cityId, stateId);

    const cityData = {
        name: cityInfo?.nomeCidade || 'Cidade não encontrada',
        state: `${cityInfo?.nomeCidade || 'Cidade não encontrada'} (${cityInfo?.uf || 'UF não encontrada'})`,
        incomeSummary: incomeSummary,
        employmentRate: employmentRate,
        sewageSummary: sewageSummary,
        waterNetworkCoverage: waterNetworkCoverage,
        urbanSurroundingCoverage: urbanSurroundingCoverage,
        educationSummary: educationSummary,
        population: population,
        uf: cityInfo?.uf || 'UF não encontrada',
    };

    if (!cityId || isPopulationLoading || isIncomeLoading || isEmploymentRateLoading || isCommuteSummaryLoading || isSewageSummaryLoading || isWaterNetworkCoverageLoading || isUrbanSurroundingCoverageLoading || isEducationSummaryLoading || isCityInfoLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-6">
                <LargeCard
                    cityName={cityData.name}
                    state={cityData.state}
                    source='Dados IBGE 2022'
                />

                <div className="space-y-8">
                    <section>
                        <h2 className="text-primary-800 text-2xl font-semibold mb-4">Informações Gerais</h2>
                        <CardRow>
                            <SmallCard
                                title="População"
                                content={Number(cityData.population).toLocaleString('pt-BR')}
                                footer="habitantes"
                            />
                            <SmallCard
                                title="Renda Média"
                                content={`R$ ${Number(cityData.incomeSummary).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                                footer="por mês"
                            />
                            <SmallCard
                                title="Taxa de Ocupação"
                                content={`${Number(cityData.employmentRate).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`}
                                footer="da população empregada"
                            />
                        </CardRow>
                    </section>

                    <section>
                        <h2 className="text-primary-800 text-2xl font-semibold mb-4">Infraestrutura e Saneamento</h2>
                        <CardRow>
                            <SmallCard
                                title="Cobertura de Esgoto"
                                content={`${Number(cityData.sewageSummary).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`}
                                footer="da população coberta"
                            />
                            <SmallCard
                                title="Rede de Água"
                                content={`${Number(cityData.waterNetworkCoverage).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`}
                                footer="da população coberta"
                            />
                            <SmallCard
                                title="Coleta Urbana"
                                content={`${Number(cityData.urbanSurroundingCoverage).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`}
                                footer="da população urbana"
                            />
                        </CardRow>
                    </section>

                    {(commuteSummary || educationSummary) && (
                        <section>
                            <h2 className="text-primary-800 text-2xl font-semibold mb-4">Análises e Distribuições</h2>
                            <CardRow>
                                {commuteSummary && (
                                    <MediumCard
                                        title="Tempo de Deslocamento"
                                    >
                                        <CommuteChart commuteSummary={commuteSummary} />
                                    </MediumCard>
                                )}
                                {educationSummary && (
                                    <MediumCard
                                        title="Nível de Escolaridade"
                                    >
                                        <EducationChart educationSummary={educationSummary} />
                                    </MediumCard>
                                )}
                            </CardRow>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CityContent;