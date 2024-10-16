import { IngredientItem } from "./IngredientItem"

interface Props {
  ingredients: string[]
}

const IngredientsList = ({ ingredients }: Props) => {
  return (
    <section>
      <h2>Ingredientes</h2>
      <ul>
        {
          ingredients && ingredients.map((ingredient, index) => (
            <IngredientItem key={index} ingredient={ingredient} />
          ))
        }
      </ul>
    </section>
  )
}


export { IngredientsList }