import './styles/App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"

export function App() {
    const { fact, refreshFact } =  useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handeClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de Gatitos</h1>
            <button onClick={handeClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first tree words for ${fact}`}/>}
        </main>
    )
}