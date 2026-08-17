interface SearchFiltersProps {
  searchTerm: string
  status: string
  onSearchTermChange: (value: string) => void
  onStatusChange: (value: string) => void
}

export function SearchFilters({
  searchTerm,
  status,
  onSearchTermChange,
  onStatusChange,
}: SearchFiltersProps) {
  return (
    <div className="mt-8 grid w-[90%] max-w-[600px] gap-4 sm:grid-cols-2">
      <div>
        <label
          className="mb-2 block text-sm font-extrabold uppercase tracking-[1px] text-[#97ce4c]"
          htmlFor="character-search"
        >
          Buscar personaje
        </label>
        <input
          className="w-full rounded-xl border-2 border-transparent bg-white/90 px-4 py-3 text-[#1a1a2e] shadow-[0_8px_16px_rgba(0,0,0,0.25)] outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#00b0c8] focus:ring-4 focus:ring-[#00b0c8]/30"
          id="character-search"
          onChange={(event) => onSearchTermChange(event.target.value)}
          placeholder="Ej. Rick Sanchez"
          type="search"
          value={searchTerm}
        />
      </div>
      <div>
        <label
          className="mb-2 block text-sm font-extrabold uppercase tracking-[1px] text-[#97ce4c]"
          htmlFor="character-status"
        >
          Estado
        </label>
        <select
          className="w-full rounded-xl border-2 border-transparent bg-white/90 px-4 py-3 text-[#1a1a2e] shadow-[0_8px_16px_rgba(0,0,0,0.25)] outline-none transition-all duration-300 focus:border-[#00b0c8] focus:ring-4 focus:ring-[#00b0c8]/30"
          id="character-status"
          onChange={(event) => onStatusChange(event.target.value)}
          value={status}
        >
          <option value="">Todos</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </div>
  )
}
