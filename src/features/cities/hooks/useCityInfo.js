import { useQuery } from "@tanstack/react-query";
import { getCityInfo } from "@/features/cities/api";

export function useCityInfo(idCidade, idEstado) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ['cityInfo', idCidade, idEstado],
        queryFn: () => getCityInfo(idCidade, idEstado),
    });

    return {
        isLoading,
        data,
        error,
    }
}