import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { FetchResult } from "../../hooks/useFetch";
import { QuerysVoll } from "../../types/QuerysVoll";

interface Props {
  consulta?: FetchResult<QuerysVoll[]>;
}

const StylizedCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--fonte-principal)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontFamily: "var(--fonte-principal)",
  },
}));

const StylizedRow = styled(TableRow)(() => ({
  [`&:nth-of-type(odd)`]: {
    backgroundColor: "var(--cinza-claro)",
  },
}));

export function TableQuerys({ consulta }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="tabela customizada">
        <TableHead>
          <TableRow>
            <StylizedCell>Data</StylizedCell>
            <StylizedCell>Horário</StylizedCell>
            <StylizedCell>Profissional</StylizedCell>
            <StylizedCell>Especialidade</StylizedCell>
            <StylizedCell>Paciente</StylizedCell>
            <StylizedCell>Modalidade</StylizedCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consulta?.data &&
            consulta.data.map((query) => (
              <StylizedRow key={query.id}>
                <StylizedCell>{query.data}</StylizedCell>
                <StylizedCell>{query.horario}</StylizedCell>
                <StylizedCell>{query.profissional[0].nome}</StylizedCell>
                <StylizedCell>
                  {query.profissional[0].especialidade}
                </StylizedCell>
                <StylizedCell>{query.paciente}</StylizedCell>
                <StylizedCell>{query.modalidade}</StylizedCell>
              </StylizedRow>
            ))}
          {consulta?.error && (
            <TableRow>
              <StylizedCell colSpan={6} style={{ color: "red" }}>
                Error: {consulta.error}
              </StylizedCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
