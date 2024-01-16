import { useEffect, useState } from "react"
import { getRandomFact } from "./services/facts";
import './App.css';

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red&json=true`;
const CAT_ENDPOINT_RANDON_FACT_URL = `https://catfact.ninja/fact`;
// const CAT_IMAGE_URL = `https://cataas.com/cat/${imgID}/says/${word}`;


export function App() {

    const [fact, setFact] = useState();
    const [image, setImage] = useState('');
    
    useEffect(() => {
        getRandomFact().then(newFact => setFact(newFact));
    }, [])

    useEffect(() => {
        if (!fact)
            return;
        const firstWord = fact.split(' ', 1).join(' ');
        fetch('https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true')
            .then(response => response.json())
            .then(imgData => {
                const { _id } = imgData;
                setImage({ id: _id, word: firstWord });
            })
    }, [fact])

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