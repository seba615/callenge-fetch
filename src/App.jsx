import { useEffect, useState } from "react"
import { getRandomFact } from "./services/facts";
import { useCatImage } from "./hooks/useCatImage";
import './App.css';

const CAT_ENDPOINT_RANDON_FACT_URL = `https://catfact.ninja/fact`;

export function App() {
    const [fact, setFact] = useState();
    const {image} = useCatImage({fact});

    useEffect(() => {
        getRandomFact().then(newFact => setFact(newFact));
    }, [])



    const handleUpdate = () => {
        getRandomFact().then(newFact => setFact(newFact));
    }

    return (
        <main>
            <h1>Fetching con gatos</h1>
            <button onClick={handleUpdate}> Refresh </button>
            {fact && <p>{fact}</p>}
            {image && <img src={`https://cataas.com/cat/${image.id}/says/${image.word}`} alt="Image extracted using Cataas API" />}
        </main>
    )
}