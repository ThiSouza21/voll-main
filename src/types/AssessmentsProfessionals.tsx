import { ProfessionalsVoll } from "./ProfessionalsVoll";
import { QuerysVoll } from "./QuerysVoll";

type TypeQuerys = Omit<QuerysVoll, "modalidade" | "paciente">;
type TypePros = Pick<ProfessionalsVoll, "nota">;

export type AssessmentsProfessionals = TypeQuerys & TypePros;
