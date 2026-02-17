import { useQuery } from "@tanstack/react-query";
import { getStateIncomeSummaries } from "@/features/cities/api/income";

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
