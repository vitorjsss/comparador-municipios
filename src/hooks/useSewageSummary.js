import { useQuery } from "@tanstack/react-query";
import { getSewageSummary } from "@/services";

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