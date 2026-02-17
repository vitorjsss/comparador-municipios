import { BASE_URL, PERIODO, NIVEL_CIDADE, NIVEL_ESTADO } from './config';
import { fetchIBGE, extractSerieValue } from './helpers';

export async function getPopulation(idCidade) {
    const data = await fetchIBGE('9514', '93', idCidade, '2[6794]|287[100362]|286[113635]');
    return extractSerieValue(data);
}

export async function getStatePopulations(idEstado) {
    const agregado = '9514';
    const variavel = '93';
    const classificacao = '2[6794]|287[100362]|286[113635]';
    const url = `${BASE_URL}/${agregado}/periodos/${PERIODO}/variaveis/${variavel}?localidades=${NIVEL_CIDADE}[${NIVEL_ESTADO}[${idEstado}]]&classificacao=${classificacao}`;

    const response = await fetch(url);
    const data = await response.json();

    const populations = {};
    data[0].resultados[0].series.forEach(serie => {
        populations[serie.localidade.id] = serie.serie[PERIODO];
    });

    return populations;
}
