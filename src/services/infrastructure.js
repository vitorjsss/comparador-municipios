import { PERIODO } from './config';
import { fetchIBGE, extractSerieValue } from './helpers';

export async function getUrbanSurroundingCoverage(idCidade) {
    const data = await fetchIBGE('10055', '13306', idCidade);
    return extractSerieValue(data);
}

export async function getSewageSummary(idCidade) {
    const data = await fetchIBGE('10053', '1009599', idCidade, '11558[all]');
    const results = data[0].resultados;

    const getValue = (code) =>
        Number(
            results.find(r =>
                Object.keys(r.classificacoes[0].categoria)[0] === code
            )?.series[0].serie[PERIODO]
        ) || 0;

    return getValue("72110");
}

export async function getWaterNetworkCoverage(idCidade) {
    const data = await fetchIBGE('6751', '1009599', idCidade, '1821[72144]');
    return extractSerieValue(data);
}
