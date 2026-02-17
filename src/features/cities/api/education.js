import { fetchIBGE, findByCategory } from './helpers';

export async function getEducationSummary(idCidade) {
    const data = await fetchIBGE('10061', '1002667', idCidade, '1568[all]|58[95253]|2[6794]|86[95251]');
    const resultados = data[0].resultados;

    return {
        fundamentalIncompleto: findByCategory(resultados, '9493'),
        fundamentalCompleto: findByCategory(resultados, '9494'),
        medioCompleto: findByCategory(resultados, '9495'),
        superiorCompleto: findByCategory(resultados, '99713')
    };
}
