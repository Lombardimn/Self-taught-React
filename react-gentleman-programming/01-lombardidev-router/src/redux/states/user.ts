import { createSlice } from "@reduxjs/toolkit";
import { Roles, UserInfo } from "../../models";
import { persistLocalStore, clearLocalStore } from "../../utilities";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: '',
  email: '',
  rol: Roles.ADMIN // Debe ser el tipo, pero para prueba lo dejamos con el valor
}

export const UserKey = 'user'

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user') 
    ? JSON.parse(localStorage.getItem('user') as string) 
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => { 
      persistLocalStore<UserInfo>(UserKey, action.payload)
      return action.payload
    },
    updapteUser: (state, action) => {
      const result = { ...state, ...action.payload }
      persistLocalStore<UserInfo>(UserKey, result)
      return result
    },
    resetUser: () => {
      clearLocalStore(UserKey)
      return EmptyUserState
    }
  }
})

export const { createUser, updapteUser, resetUser } = userSlice.actions

export default userSlice.reducer