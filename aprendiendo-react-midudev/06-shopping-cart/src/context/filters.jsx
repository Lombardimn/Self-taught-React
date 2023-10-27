import { createContext, useState } from "react";

// 1. Crear el contexto - Este es el contexto que tenemos que consumir
export const FiltersContext = createContext()

// 2. Crear el provider - provee el contexto a los componentes
// eslint-disable-next-line react/prop-types
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider 
            value={{
                filters,
                setFilters
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}