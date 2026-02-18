import { useQuery } from "@tanstack/react-query";
import { getEducationSummary } from "@/services";

export function useEducationSummary(idCidade) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['cityEducationSummary', idCidade],
        queryFn: () => getEducationSummary(idCidade),
        enabled: !!idCidade,
    });

    return {
        isLoading,
        data,
        error,
    }
}