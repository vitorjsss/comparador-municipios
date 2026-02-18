import { useQuery } from "@tanstack/react-query";
import { getIncomeSummary } from "@/services";

export function useIncomeSummary(idCidade) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['cityIncomeSummary', idCidade],
        queryFn: () => getIncomeSummary(idCidade),
        enabled: !!idCidade,
    });

    return {
        isLoading,
        data,
        error,
    }
}