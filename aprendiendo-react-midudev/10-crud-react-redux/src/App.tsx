import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUsers'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="App">
      <h1>Nuestro proyecto con Redux</h1>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </div>
  )
}

export default App
