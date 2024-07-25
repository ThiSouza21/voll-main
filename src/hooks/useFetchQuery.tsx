import { QuerysVoll } from "../types/QuerysVoll";
import { useFetch } from "./useFetch";

export function useFetchQuery() {
  return useFetch<QuerysVoll[]>("consultas");
}
