import { useEffect, useState } from "react";

interface UriFetch {
  profissionais: string;
  consultas: string;
  avaliacoes: string;
}

export type FetchResult<T> = {
  data?: T | null;
  error?: string | null;
};

export function useFetch<T>(url: keyof UriFetch): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/${url}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof SyntaxError) {
          setError("Erro ao analisar o JSON retornado.");
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido ao buscar os dados.");
        }
        setData(null);
      }
    }

    fetchData();
  }, [url]);

  return { data, error };
}
