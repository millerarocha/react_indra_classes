
import { CharacterList } from './components/CharacterList/CharacterList'
import { Header } from './components/Header/Header'
function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1a1a2e] px-4 py-12 font-[Nunito,sans-serif]">
      <Header />
      <CharacterList />
    </div>
  )
}

export default App;
