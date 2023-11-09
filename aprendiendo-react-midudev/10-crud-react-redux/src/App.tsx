import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUsers'

function App() {
  return (
    <div className="App">
      <h1>Nuestro proyecto con Redux</h1>
      <ListOfUsers />
      <CreateNewUser />
    </div>
  )
}

export default App
