export interface Character {
  id: number
  name: string
  status: string
  species: string
  gender: string
  image: string
}

export interface CharacterApiResponse {
  info: {
    count: number
    next: string | null
    pages: number
    prev: string | null
  }
  results: Character[]
}
