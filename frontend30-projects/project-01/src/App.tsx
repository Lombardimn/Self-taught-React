import { Card } from "./components/Card"

function App() {

  return (
    <>
      <h1>QR code component</h1>

      <Card image="/image-qr.png" imgAlt="QR code">
        <h2 className="card-title">Improve your front-end skills by building projects</h2>
        <p className="card-description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </Card>
    </>
  )
}

export default App
