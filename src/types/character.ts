export interface Character {
  id: number
  name: string
  status: string
  species: string
  image: string
}

export interface CharacterApiResponse {
  results: Character[]
}
