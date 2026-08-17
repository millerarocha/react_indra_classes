import './ErrorMessage.css'

interface ErrorMessageProps {
  error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="error-message">
      <h2>¡Wubba Lubba Dub Dub - Error!</h2>
      <p>{error}</p>
    </div>
  );
}
