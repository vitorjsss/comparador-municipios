import { useQuery } from "@tanstack/react-query";
import { getUrbanSurroundingCoverage } from "@/features/cities/api";

export function useUrbanSurroundingCoverage(idCidade) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['urbanSurroundingCoverage', idCidade],
        queryFn: () => getUrbanSurroundingCoverage(idCidade),
        enabled: !!idCidade,
    });

    return {
        isLoading,
        data,
        error,
    }
}