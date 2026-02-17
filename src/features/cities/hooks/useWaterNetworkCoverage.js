import { useQuery } from "@tanstack/react-query";
import { getWaterNetworkCoverage } from "@/features/cities/api";

export function useWaterNetworkCoverage(idCidade) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['cityWaterNetworkCoverage', idCidade],
        queryFn: () => getWaterNetworkCoverage(idCidade),
        enabled: !!idCidade,
    });

    return {
        isLoading,
        data,
        error,
    }
}