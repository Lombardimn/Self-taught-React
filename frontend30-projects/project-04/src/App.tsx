import './App.css'
import { Hero, Card, IngredientsList } from './components'
import Recipe from './mocks/omelette-recipe.json'

function App() {
  return (
    <>
      <Hero 
        title={Recipe.titulo}
        description={Recipe.descripcion}
        imgUrl={Recipe.imagen_url} />
        <Card title='Tiempo de preparación y cocción'>
          {
            Recipe.tiempo_preparacion && 
            Object.entries(Recipe.tiempo_preparacion).map(([key, { descripcion, valor }]) => (
              <p key={key}>
                <strong>{descripcion}: </strong>{valor}
              </p>
            ))
          }
        </Card>
        <IngredientsList />
    </>
  )
}

export default App
