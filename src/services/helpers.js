import { BASE_URL, PERIODO, NIVEL_CIDADE } from './config';

/**
 * Helper para fazer requisições à API do IBGE
 */
export async function fetchIBGE(agregado, variavel, idCidade, classificacao = '') {
    const classificacaoParam = classificacao ? `&classificacao=${classificacao}` : '';
    const url = `${BASE_URL}/${agregado}/periodos/${PERIODO}/variaveis/${variavel}?localidades=${NIVEL_CIDADE}[${idCidade}]${classificacaoParam}`;

    const response = await fetch(url);
    return response.json();
}

/**
 * Helper para extrair valor simples de uma série
 */
export function extractSerieValue(data) {
    return data[0].resultados[0].series[0].serie[PERIODO];
}

/**
 * Helper para encontrar resultado por código de categoria
 */
export function findByCategory(resultados, categoryCode) {
    return Number(
        resultados.find(r =>
            Object.keys(r.classificacoes[0].categoria)[0] === categoryCode
        )?.series[0].serie[PERIODO]
    );
}
