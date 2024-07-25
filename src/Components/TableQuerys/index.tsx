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
import { useFetchQuery } from "../../hooks/useFetchQuery";

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

export function TableQuerys() {
  const { data, error } = useFetchQuery();

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
          {data &&
            data.map((query) => (
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
          {error && (
            <TableRow>
              <StylizedCell colSpan={6} style={{ color: "red" }}>
                Error: {error}
              </StylizedCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
