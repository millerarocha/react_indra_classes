import { CharacterCard } from '../CharacterCard/CharacterCard'
import { Loader } from '../Loader/Loader'
import { EmptyMessage } from '../EmptyMessage/EmptyMessage'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { useCharacter } from '../../hooks/useCharacter'

interface CharacterListProps {
  searchTerm: string
  status: string
}

export function CharacterList({ searchTerm, status }: CharacterListProps) {
  const { characters, loading, error } = useCharacter(searchTerm, status)

  if (loading) {
    return <Loader />;
  }

  if(error) {
    return <ErrorMessage error={error} />;
  }
  
  if (characters.length === 0) {
    return <EmptyMessage />;
  }

  return (
    <section className="my-12 grid w-full max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
}
