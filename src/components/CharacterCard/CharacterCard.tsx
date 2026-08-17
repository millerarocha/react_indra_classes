import type { Character } from '../../types/character'

interface CharacterCardProps {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border-2 border-transparent bg-[#24283b] shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out hover:-translate-y-[10px] hover:border-[#97ce4c] hover:shadow-[0_15px_35px_rgba(151,206,76,0.3)]">
      <img src={character.image} alt={character.name} className="h-[280px] w-full object-cover" />
      <div className="p-6">
        <h2 className="mb-2 text-[1.5rem] font-extrabold text-white">{character.name}</h2>
        <p className="flex items-center gap-2 text-base text-[#a9b1d6]">
          <span
            className={`inline-block size-3 rounded-full ${
              character.status.toLowerCase() === 'alive'
                ? 'bg-[#55cc44]'
                : character.status.toLowerCase() === 'dead'
                  ? 'bg-[#d63d2e]'
                  : 'bg-[#9e9e9e]'
            }`}
          />
          {character.status} - {character.species}
        </p>
      </div>
    </article>
  );
}
