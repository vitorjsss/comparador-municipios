import { useQuery } from "@tanstack/react-query";
import { getPopulation } from "@/features/cities/api";

export function usePopulation(idCidade) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['cityPopulation', idCidade],
        queryFn: () => getPopulation(idCidade),
        enabled: !!idCidade,
    });

    return {
        isLoading,
        data,
        error,
    }
}