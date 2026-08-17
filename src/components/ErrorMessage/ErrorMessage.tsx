interface ErrorMessageProps {
  error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="animate-shake-error mx-auto my-12 w-full max-w-[600px] rounded-2xl border-2 border-[#d63d2e] bg-[#24283b] px-8 py-12 text-center shadow-[0_0_20px_rgba(214,61,46,0.4)]">
      <h2 className="mb-4 text-[1.8rem] font-bold uppercase tracking-[1px] text-[#d63d2e]">
        ¡Wubba Lubba Dub Dub - Error!
      </h2>
      <p className="text-[1.2rem] font-bold text-[#a9b1d6]">{error}</p>
    </div>
  );
}
