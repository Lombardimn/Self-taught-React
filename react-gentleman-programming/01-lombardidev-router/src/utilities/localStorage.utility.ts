export const persistLocalStore = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }))
}

export const clearLocalStore = (key: string) => {
  localStorage.removeItem(key)
}