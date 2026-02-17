import { useQuery } from "@tanstack/react-query";
import { getSewageSummary } from "@/features/cities/api";

export function useSewageSummary(idCidade) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['citySewageSummary', idCidade],
        queryFn: () => getSewageSummary(idCidade),
        enabled: !!idCidade,
    });

    return {
        isLoading,
        data,
        error,
    }
}