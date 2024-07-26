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
          setData(null);
          throw new Error();
        } else {
          const responseData = await response.json();
          setData(responseData);
          setError(null);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError("Nao foi encontrado dados");
        } else {
          setError("Nao foi encontrado dados");
        }
      }
    }

    fetchData();
  }, [url]);

  if (!data) {
    return { error };
  }
  return { data };
}
