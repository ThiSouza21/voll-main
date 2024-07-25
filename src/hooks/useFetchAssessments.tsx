import { AssessmentsProfessionals } from "../types/AssessmentsProfessionals";
import { useFetch } from "./useFetch";

export function useFetchAssessments() {
  return useFetch<AssessmentsProfessionals[]>("avaliacoes");
}
