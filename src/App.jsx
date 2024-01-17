import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import './App.css';

export function App() {
    const { fact, refreshRandomFact } = useCatFact();
    const { imageURL } = useCatImage({ fact });

    const handleUpdate = () => {
        refreshRandomFact();
    }

    return (
        <main>
            <h1>Fetching con gatos</h1>
            <button onClick={handleUpdate}> Refresh </button>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={imageURL} alt="Image extracted using Cataas API" />}
        </main>
    )
}