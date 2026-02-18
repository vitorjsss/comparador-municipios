export async function getStateGrid(uf) {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/malhas/estados/${uf}`);
    return response.text();
}
