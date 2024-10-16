import './App.css'
import { Hero, Card, IngredientsList, InstructionsList, Nutrition } from './components'
import Recipe from './mocks/omelette-recipe.json'

function App() {
  return (
    <>
      <Hero 
        title={Recipe.titulo}
        description={Recipe.descripcion}
        imgUrl={Recipe.imagen_url} />

        <main>
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

          <IngredientsList ingredients={Recipe.ingredientes} />

          <InstructionsList steps={Recipe.instrucciones} />

          <Nutrition data={Recipe.nutricion} />
        </main>
    </>
  )
}

export default App
