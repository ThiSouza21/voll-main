import { FetchResult } from "../../hooks/useFetch";
import { ProfessionalsVoll } from "../../types/ProfessionalsVoll";
import { CardAssessments } from "../CardAssessments";

interface Props {
  profissionais: FetchResult<ProfessionalsVoll[]>;
}

export function ContainerAssessments({ profissionais }: Props) {
  return (
    <>
      {profissionais &&
        profissionais.data?.map((pro) => {
          const notaStars = [];
          for (
            let i = 0;
            i < parseInt(pro.nota.toString().split(".")[0]);
            i++
          ) {
            notaStars.push("/assets/star.svg");
          }

          return (
            <CardAssessments
              key={pro.id}
              nome={pro.nome}
              especialidade={pro.especialidade}
              nota={notaStars}
              imagem={pro.imagem}
            />
          );
        })}
    </>
  );
}
