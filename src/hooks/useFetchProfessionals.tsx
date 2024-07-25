import { ProfessionalsVoll } from "../types/ProfessionalsVoll";
import { useFetch } from "./useFetch";

export function useFetchProfessionals() {
  return useFetch<ProfessionalsVoll[]>("profissionais");
}
