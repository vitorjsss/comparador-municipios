import { useQuery } from "@tanstack/react-query";
import { getStatePopulations } from "@/services";

export function useStatePopulations(stateId) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['statePopulations', stateId],
        queryFn: () => getStatePopulations(stateId),
        enabled: !!stateId,
    });

    return {
        isLoading,
        data,
        error,
    }
}
