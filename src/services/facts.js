const CAT_ENDPOINT_RANDON_FACT_URL = `https://catfact.ninja/fact`;

export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDON_FACT_URL)
        .then(response => response.json())
        .then(factData => {
            const newFact = factData.fact;
            return newFact
        }
    )
}