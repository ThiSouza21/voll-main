import { Profissionais } from "./Professionals";

export interface QuerysVoll {
  id: number;
  data: string;
  horario: string;
  profissional: Profissionais[];
  paciente: string;
  modalidade: string;
}
