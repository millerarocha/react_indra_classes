
import { useState } from 'react'
import { CharacterList } from './components/CharacterList/CharacterList'
import { Header } from './components/Header/Header'
import { SearchFilters } from './components/SearchFilters/SearchFilters'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState('')

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1a1a2e] px-4 py-12 font-[Nunito,sans-serif]">
      <Header />
      <SearchFilters
        onSearchTermChange={setSearchTerm}
        onStatusChange={setStatus}
        searchTerm={searchTerm}
        status={status}
      />
      <CharacterList searchTerm={searchTerm} status={status} />
    </div>
  )
}

export default App;
