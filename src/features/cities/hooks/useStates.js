import { useQuery } from "@tanstack/react-query";
import { getStates } from "@/features/cities/api";

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