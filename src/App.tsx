
import { useState } from 'react'
import { CharacterList } from './components/CharacterList/CharacterList'
import { Header } from './components/Header/Header'
import { SearchFilters } from './components/SearchFilters/SearchFilters'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [gender, setGender] = useState('')
  const [page, setPage] = useState(1)

  function updateSearchTerm(value: string) {
    setSearchTerm(value)
    setPage(1)
  }

  function updateStatus(value: string) {
    setStatus(value)
    setPage(1)
  }

  function updateSpecies(value: string) {
    setSpecies(value)
    setPage(1)
  }

  function updateGender(value: string) {
    setGender(value)
    setPage(1)
  }

  function clearFilters() {
    setSearchTerm('')
    setStatus('')
    setSpecies('')
    setGender('')
    setPage(1)
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1a1a2e] px-4 py-12 font-[Nunito,sans-serif]">
      <Header />
      <SearchFilters
        onSearchTermChange={updateSearchTerm}
        onClearFilters={clearFilters}
        onGenderChange={updateGender}
        onSpeciesChange={updateSpecies}
        onStatusChange={updateStatus}
        searchTerm={searchTerm}
        gender={gender}
        species={species}
        status={status}
      />
      <CharacterList
        gender={gender}
        onPageChange={setPage}
        page={page}
        searchTerm={searchTerm}
        species={species}
        status={status}
      />
    </div>
  )
}

export default App;
