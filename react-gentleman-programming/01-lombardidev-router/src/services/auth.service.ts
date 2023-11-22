const baseURL = 'https://rickandmortyapi.com/api/'
const charactersURL = baseURL + 'character/'

export const getMorty = () => {
  return fetch(charactersURL + '2').then((response) => response.json())
}