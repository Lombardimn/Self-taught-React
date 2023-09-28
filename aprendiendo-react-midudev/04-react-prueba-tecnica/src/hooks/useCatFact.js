import { useState, useEffect } from "react"
import { getRandomFact } from "../service/facts"

export function useCatFact () {
    const [ fact, setFact ] = useState('cat')

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }
    // realizamos un fetch mediante el useEffect
    useEffect(() =>{ refreshFact }, [])

    return {fact, refreshFact}
}