import { useQuery } from "@tanstack/react-query";
import { getStateGrid } from "@/services";

export function useStateGrid(uf) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['stateGrid', uf],
        queryFn: () => getStateGrid(uf),
    });

    return {
        isLoading,
        data,
        error,
    }
}