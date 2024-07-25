import { Profissionais } from "./Professionals";

export interface QuerysVoll {
  id: string;
  data: string;
  horario: string;
  profissional: Profissionais[];
  paciente: string;
  modalidade: string;
}
