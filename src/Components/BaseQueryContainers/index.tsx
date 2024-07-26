import styled from "styled-components";
import { TitleContainerQuery } from "../TitleContainerQuery";
import { TableQuerys } from "../TableQuerys";
import { NavLinks } from "../NavLinks";
import { FetchResult } from "../../hooks/useFetch";
import { QuerysVoll } from "../../types/QuerysVoll";
import { DataChart } from "../DataChart";
import { ProfessionalsVoll } from "../../types/ProfessionalsVoll";
import { ContainerAssessments } from "../ContainerAssessments";
interface Props {
  children?: React.ReactNode;
  nameLink?: string;
  to: string;
  image?: string;
  table?: boolean;
  dataChart?: boolean;
  consulta?: FetchResult<QuerysVoll[]>;
  date?: boolean;
  profissionais?: FetchResult<ProfessionalsVoll[]>;
}

const WrapperContainerHeroMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
`;

const ContainerHeroContent = styled.div`
  width: 100%;
  max-width: min(90%, 108em);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2em;
  height: auto;
`;

export function BaseQueryContainers({
  image,
  children,
  to,
  nameLink,
  table,
  consulta,
  dataChart,
  profissionais,
  date,
}: Props) {
  return (
    <WrapperContainerHeroMain>
      <ContainerHeroContent>
        <TitleContainerQuery date={date} image={image}>
          {children}
        </TitleContainerQuery>
        {table && <TableQuerys consulta={consulta} />}
        {dataChart && <DataChart consulta={consulta} />}
        {profissionais && (
          <ContainerAssessments profissionais={profissionais} />
        )}
        {nameLink && <NavLinks to={to}>{nameLink}</NavLinks>}
      </ContainerHeroContent>
    </WrapperContainerHeroMain>
  );
}
