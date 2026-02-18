import { fetchIBGE, extractSerieValue } from './helpers';

export async function getEmploymentRate(idCidade) {
    const data = await fetchIBGE('10253', '1000140', idCidade, '12085[100440]|2[6794]');
    const valor = extractSerieValue(data);
    return Number(valor);
}
