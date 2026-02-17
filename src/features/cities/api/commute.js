import { fetchIBGE, findByCategory } from './helpers';

export async function getCommuteSummary(idCidade) {
    const data = await fetchIBGE('10331', '1013556', idCidade, '537[all]');
    const resultados = data[0].resultados;

    return {
        upToFiveMin: findByCategory(resultados, '19429'),
        sixToFifteenMin: findByCategory(resultados, '79189'),
        sixteenToThirtyMin: findByCategory(resultados, '79190'),
        overThirtyToOneHour: findByCategory(resultados, '19431'),
        overOneHourToTwoHours: findByCategory(resultados, '19432'),
        overTwoHoursToFourHours: findByCategory(resultados, '79191'),
        overFourHours: findByCategory(resultados, '79192')
    };
}
