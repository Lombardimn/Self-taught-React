import { type User } from '../types.d'

interface Props {
  users: User[]
}

export function UsersList ({ users }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {
          users.map(user => {
            return (
              <tr key={user.id.value}>
                <td>
                  <img
                    src={user.picture.thumbnail}
                    alt={user.name.title}
                  />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>
                  <button>Eliminar</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
