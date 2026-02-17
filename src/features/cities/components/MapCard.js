'use client'
import Image from "next/image"
import { useStateGrid } from "@/features/cities/hooks/useStateGrid"

function MapCard({ uf }) {
    const { isLoading, data, error } = useStateGrid(uf);

    const svgDataUrl = data ? `data:image/svg+xml,${encodeURIComponent(data)}` : null;

    return (
        <div className="flex-1 p-6 flex items-center justify-center bg-white rounded-xl shadow-sm">
            {error && <p>Erro ao carregar mapa</p>}
            {svgDataUrl && <Image src={svgDataUrl} alt="Mapa do estado" width={300} height={300} />}
        </div>
    )
}

export default MapCard