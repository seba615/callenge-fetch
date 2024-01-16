import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import './App.css';

export function App() {
    const { fact, refreshRandomFact } = useCatFact();
    const { image } = useCatImage({ fact });

    const handleUpdate = () => {
        refreshRandomFact();
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