import { useQuery } from "@tanstack/react-query";
import { getStates } from "@/services";

export function useStates() {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['states'],
        queryFn: getStates,
    });

    return {
        isLoading,
        data,
        error,
    }
}