import { CharacterCard } from '../CharacterCard/CharacterCard'
import { Loader } from '../Loader/Loader'
import { EmptyMessage } from '../EmptyMessage/EmptyMessage'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { ResultsSummary } from '../ResultsSummary/ResultsSummary'
import { Pagination } from '../Pagination/Pagination'
import { useCharacter } from '../../hooks/useCharacter'

interface CharacterListProps {
  searchTerm: string
  species: string
  status: string
  gender: string
  onPageChange: (page: number) => void
  page: number
}

export function CharacterList({
  searchTerm,
  status,
  species,
  gender,
  onPageChange,
  page,
}: CharacterListProps) {
  const { characters, loading, error, resultInfo } = useCharacter(
    searchTerm,
    status,
    species,
    gender,
    page,
  )

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
    <>
      {resultInfo && <ResultsSummary count={resultInfo.count} />}
      <section className="my-12 grid w-full max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
      {resultInfo && (
        <Pagination
          hasNextPage={resultInfo.next !== null}
          hasPreviousPage={resultInfo.prev !== null}
          onPageChange={onPageChange}
          page={page}
          totalPages={resultInfo.pages}
        />
      )}
    </>
  )
}
