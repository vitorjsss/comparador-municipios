import { BASE_URL, PERIODO, NIVEL_CIDADE, NIVEL_ESTADO } from './config';
import { fetchIBGE, extractSerieValue } from './helpers';

export async function getIncomeSummary(idCidade) {
    const data = await fetchIBGE('10289', '13536', idCidade);
    return extractSerieValue(data);
}

export async function getStateIncomeSummaries(idEstado) {
    const agregado = '10289';
    const variavel = '13536';
    const url = `${BASE_URL}/${agregado}/periodos/-6/variaveis/${variavel}?localidades=${NIVEL_CIDADE}[${NIVEL_ESTADO}[${idEstado}]]`;

    const response = await fetch(url);
    const data = await response.json();

    const incomes = {};
    data[0].resultados[0].series.forEach(serie => {
        // Pega o valor mais recente (último período disponível)
        const periodos = Object.keys(serie.serie);
        const ultimoPeriodo = periodos[periodos.length - 1];
        incomes[serie.localidade.id] = serie.serie[ultimoPeriodo];
    });

    return incomes;
}
