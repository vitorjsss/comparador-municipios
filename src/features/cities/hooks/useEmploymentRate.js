import { useQuery } from "@tanstack/react-query";
import { getEmploymentRate } from "@/features/cities/api";

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