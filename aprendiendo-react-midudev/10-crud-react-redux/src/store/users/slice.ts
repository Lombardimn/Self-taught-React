import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type UserID = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UsersWhitID extends User {
  id: string
}

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Matias Lombardi",
    email: "matiiaslombardi@gmail.com",
    github: "lombardimn",
  },
  {
    id: "2",
    name: "Jack Russell",
    email: "jackrussell@gmail.com",
    github: "jackrussell",
  },
  {
    id: "3",
    name: "John Doe",
    email: "johndoe@gmailcom",
    github: "johndoe",
  },
  {
    id: "4",
    name: "Jane Doe",
    email: "janedoe@gmailcom",
    github: "janedoe",
  },
  {
    id: "5",
    name: "Mary Smith",
    email: "marysmith@gmailcom",
    github: "marysmith",
  }
  
]

const initialState: UsersWhitID[] = (()=> {
  const persistedState = localStorage.getItem('__redux__state')
  if (persistedState) return JSON.parse(persistedState).users
  return DEFAULT_STATE
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()

      // Redux toolkit admite mutaciones de estado
      state.push({ id, ...action.payload })
    },
    deleteUserById: (state, action: PayloadAction<UserID>) => {
      const id = action.payload
      return state = state.filter((user) => user.id !== id)
    },
    rollbackUser: (state, action: PayloadAction<UsersWhitID>) => {
      const isUserAlreadyDefined =  state.find(user => user.id === action.payload.id)
      if (!isUserAlreadyDefined) {

        // Redux toolkit admite mutaciones de estado
        state.push(action.payload)
      }

    }
  }
})

export default usersSlice.reducer
export const { addNewUser ,deleteUserById, rollbackUser } = usersSlice.actions