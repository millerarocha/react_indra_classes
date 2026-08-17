interface SearchFiltersProps {
  searchTerm: string
  onSearchTermChange: (value: string) => void
}

export function SearchFilters({
  searchTerm,
  onSearchTermChange,
}: SearchFiltersProps) {
  return (
    <div className="mt-8 w-[90%] max-w-[600px]">
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
  )
}
