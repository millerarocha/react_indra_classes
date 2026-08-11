import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export function useCharacter() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCharacters() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${API_URL}/character`);

        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }

        const data = await res.json();
        setCharacters(data.results);
      } catch (err) {
        console.error("Error al obtener los personajes:", err);
        setError(
          "Hubo un problema al cargar los personajes. Intenta de nuevo más tarde."
        );
      } finally {
        setLoading(false);
      }
    }

    getCharacters();
  }, []);

  return { characters, loading, error };
}
