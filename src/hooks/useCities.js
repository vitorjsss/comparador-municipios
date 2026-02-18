import { useQuery } from "@tanstack/react-query";
import { getCities } from "@/services";

export function useCities(idEstado) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['cities', idEstado],
        queryFn: () => getCities(idEstado),
    });

    return {
        isLoading,
        data,
        error,
    }
}