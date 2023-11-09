import { Middleware, configureStore } from "@reduxjs/toolkit"
import usersReducer, { rollbackUser } from "./users/slice"
import { toast } from "sonner"

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem("__redux__state", JSON.stringify(store.getState()))
}

const syncWhitDataBaseMiddleware: Middleware = store => next => action => {
  const { type, payload } = action
  const previousState = store.getState()

  next(action)

  if (type === 'users/deleteUserById') {
    const userIDToRemove = payload
    const userToRemove = previousState.users.find(user => user.id === userIDToRemove)

    fetch(`https://jsonplaceholder.typicode.com/users/${userIDToRemove}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          toast.success('Usuario eliminado de la base de datos')
        }
        throw new Error('error when sync whit data base')
      })
      .catch(() => {
        toast.error(`Error al eliminar el usuario ${action.userIDToRemove}`)
        if (userToRemove) store.dispatch(rollbackUser(userToRemove))
        console.log('error when sync whit data base')
      })
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware, syncWhitDataBaseMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch