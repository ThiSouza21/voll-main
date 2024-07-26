import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { FetchResult } from "../../hooks/useFetch";
import { QuerysVoll } from "../../types/QuerysVoll";
import styled from "styled-components";

interface Props {
  consulta?: FetchResult<QuerysVoll[]>;
}

interface QuerysPros {
  nome: string;
  consultas: number;
}

const SecaoEstilizada = styled.section`
  width: 100%;
  height: 100%;
  background-color: var(--branco);
  border-radius: 16px;
  padding: 1em;
`;

export function DataChart({ consulta }: Props) {
  const handleQueryDates = (consultas: FetchResult<QuerysVoll[]>) => {
    let querysPros: QuerysPros[] = [];

    const querysMonth = consultas.data?.filter((consulta) => {
      return (
        parseFloat(consulta.data.split("-")[1].replace("0", "")) ===
        new Date().getMonth() + 1
      );
    });

    querysMonth?.forEach((pro) => {
      if (
        Object.values(querysPros).some(
          (value) => value.nome === pro.profissional[0].nome
        )
      ) {
        querysPros.forEach(
          (proQ) => proQ.nome === pro.profissional[0].nome && proQ.consultas++
        );
      } else {
        querysPros.push({ nome: pro.profissional[0].nome, consultas: 1 });
      }
    });

    return querysPros;
  };

  let dataChartQuery: QuerysPros[] = [];

  if (consulta && consulta.data) {
    const data = handleQueryDates(consulta);
    dataChartQuery = data || [];
  }

  return (
    <SecaoEstilizada>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          layout="vertical"
          width={500}
          height={300}
          data={dataChartQuery}
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="nome" />
          <Legend />
          <Bar
            dataKey="consultas"
            name="Consultas"
            fill="#083860"
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </SecaoEstilizada>
  );
}
