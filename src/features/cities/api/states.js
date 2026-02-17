import { BASE_URL, NIVEL_ESTADO } from './config';

export async function getStates() {
    const agregado = '10289';
    const response = await fetch(`${BASE_URL}/${agregado}/localidades/${NIVEL_ESTADO}`);
    const data = await response.json();

    const formattedData = data.map(state => ({
        id: state.id,
        value: state.nome,
        label: state.nome,
    }));

    const sortedData = formattedData.sort((a, b) => a.label.localeCompare(b.label));

    return sortedData;
}