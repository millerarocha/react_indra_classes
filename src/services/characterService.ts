import type { CharacterApiResponse } from '../types/character'

const API_URL = import.meta.env.VITE_API_URL

export async function fetchCharacters(
  name: string,
  status: string,
  signal: AbortSignal,
): Promise<CharacterApiResponse | null> {
  const searchParams = new URLSearchParams()
  const normalizedName = name.trim()

  if (normalizedName) {
    searchParams.set('name', normalizedName)
  }

  if (status) {
    searchParams.set('status', status)
  }

  const query = searchParams.size ? `?${searchParams.toString()}` : ''
  const response = await fetch(`${API_URL}/character${query}`, { signal })

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }

  return (await response.json()) as CharacterApiResponse
}
