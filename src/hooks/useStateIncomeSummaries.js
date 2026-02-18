import { useQuery } from "@tanstack/react-query";
import { getStateIncomeSummaries } from "@/services";

export function useStateIncomeSummaries(stateId) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['stateIncomeSummaries', stateId],
        queryFn: () => getStateIncomeSummaries(stateId),
        enabled: !!stateId,
    });

    return {
        isLoading,
        data,
        error,
    }
}
