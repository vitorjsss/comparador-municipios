import { BASE_URL, NIVEL_CIDADE, NIVEL_ESTADO } from './config';

export async function getCities(idEstado) {
    if (!idEstado) {
        return [];
    }

    const agregado = '10289';
    const response = await fetch(`${BASE_URL}/${agregado}/periodos/-6/variaveis/13536?localidades=${NIVEL_CIDADE}[${NIVEL_ESTADO}[${idEstado}]]`);

    const data = await response.json();

    const formattedData = data[0].resultados[0].series.map(city => ({
        id: city.localidade.id,
        value: city.localidade.nome.split(' - ')[0],
        label: city.localidade.nome.split(' - ')[0],
        uf: city.localidade.nome.split(' - ')[1] || '',
    }));

    // Ordena as cidades alfabeticamente
    const sortedData = formattedData.sort((a, b) => a.label.localeCompare(b.label));

    return sortedData;
}