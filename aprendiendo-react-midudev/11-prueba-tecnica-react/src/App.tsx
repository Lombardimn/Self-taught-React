import './App.css'
import { useEffect, useState } from 'react'
import { type User } from './types.d'
import { UsersList } from './components/UsersList'

function App () {
  const [users, setUsers] = useState<User[]>()

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(data => {
        setUsers(data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='App'>
      <h1>Prueba Técnica</h1>
      <UsersList users={users} />
    </div>
  )
}

export default App
