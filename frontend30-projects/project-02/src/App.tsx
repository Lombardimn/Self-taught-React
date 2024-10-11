import { Card } from "./components/Card/Card"

function App() {

  return (
    <>
      <h1>Blog preview card</h1>
      <Card 
        image="/images/illustration-article.svg" 
        imgAlt="Ilustration article"
        activity="Learning"
        published="Published 21 Dec 2023"
      >
        <h2 className="card-title">HTML & CSS foundations</h2>
        <p className="card-description">These languages are the backbone of every website, defining structure, content, and presentation.</p>
      </Card>
    </>
  )
}

export default App
