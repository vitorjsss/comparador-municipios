import { useQuery } from "@tanstack/react-query";
import { getCommuteSummary } from "@/services";

export function useCommuteSummary(idCidade) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['cityCommuteSummary', idCidade],
        queryFn: () => getCommuteSummary(idCidade),
        enabled: !!idCidade,
    });

    return {
        isLoading,
        data,
        error,
    }
}