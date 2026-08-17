
import { useState } from 'react'
import { CharacterList } from './components/CharacterList/CharacterList'
import { Header } from './components/Header/Header'
import { SearchFilters } from './components/SearchFilters/SearchFilters'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [gender, setGender] = useState('')

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1a1a2e] px-4 py-12 font-[Nunito,sans-serif]">
      <Header />
      <SearchFilters
        onSearchTermChange={setSearchTerm}
        onGenderChange={setGender}
        onSpeciesChange={setSpecies}
        onStatusChange={setStatus}
        searchTerm={searchTerm}
        gender={gender}
        species={species}
        status={status}
      />
      <CharacterList
        gender={gender}
        searchTerm={searchTerm}
        species={species}
        status={status}
      />
    </div>
  )
}

export default App;
