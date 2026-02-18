import { useQuery } from "@tanstack/react-query";
import { getEmploymentRate } from "@/services";

export function useEmploymentRate(idCidade) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['employmentRate', idCidade],
        queryFn: () => getEmploymentRate(idCidade),
        enabled: !!idCidade,
    });

    return {
        isLoading,
        data,
        error,
    }
}