import { useQuery } from "@tanstack/react-query";
import { getEducationSummary } from "@/features/cities/api";

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