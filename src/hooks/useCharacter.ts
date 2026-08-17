import { useEffect, useState } from 'react'
import { fetchCharacters } from '../services/characterService'
import type { Character } from '../types/character'

export function useCharacter(
  searchTerm: string,
  status: string,
  species: string,
  gender: string,
) {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    async function getCharacters() {
      try {
        setLoading(true)
        setError(null)

        await new Promise<void>((resolve) => setTimeout(resolve, 1000))

        const data = await fetchCharacters(
          searchTerm,
          status,
          species,
          gender,
          signal,
        )
        setCharacters(data?.results ?? [])
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return
        }

        console.error('Error al obtener los personajes:', err)
        setError(
          'Hubo un problema al cargar los personajes. Intenta de nuevo más tarde.',
        )
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    }

    getCharacters()

    return () => {
      controller.abort()
    }
  }, [searchTerm, status, species, gender])

  return { characters, loading, error }
}
