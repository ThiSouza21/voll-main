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

interface Props {
  consulta?: FetchResult<QuerysVoll[]>;
}

interface QuerysPros {
  nome: string;
  consultas: number;
}

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
      console.log(querysMonth);
      console.log(querysPros);
    });

    return querysPros;
  };

  let dataChartQuery: QuerysPros[] = [];

  if (consulta && consulta.data) {
    const data = handleQueryDates(consulta);
    dataChartQuery = data || [];
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        layout="vertical"
        width={500}
        height={300}
        data={dataChartQuery}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="nome" />
        <Legend />
        <Bar dataKey="consultas" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
