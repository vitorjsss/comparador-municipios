import { PERIODO } from './config';
import { fetchIBGE } from './helpers';
import { getStates } from './states';
import { getCities } from './cities';

export async function getCityInfo(idCidade, idEstado) {
    const cityData = await getCities(idEstado);
    const cityInfo = cityData.find(city => city.id === idCidade);
    const stateData = await getStates();
    const stateInfo = stateData.find(state => state.id === idEstado);

    return {
        nomeCidade: cityInfo?.label || 'Cidade não encontrada',
        uf: cityInfo?.uf || 'UF não encontrada',
        nomeEstado: stateInfo?.label || 'Estado não encontrado',
    };
}