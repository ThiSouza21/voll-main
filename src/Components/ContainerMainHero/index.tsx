import styled from "styled-components";
import { BaseQueryContainers } from "../BaseQueryContainers";

const WrapperContainerHeroMain = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  min-height: 100svh;
  padding: calc(4.7875em + 2em) 0 1em 0;
`;

const ContainerHeroContent = styled.div`
  width: 100%;
  max-width: min(80%, 98em);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  height: auto;
  background-color: #e7ebef;
  padding: 2em 0;
  border-radius: 15px;
`;

export function ContainerMainHero() {
  return (
    <WrapperContainerHeroMain>
      <ContainerHeroContent>
        <BaseQueryContainers to={"#"} nameLink="Cadastrar especialista">
          Área Administrativa
        </BaseQueryContainers>
        <BaseQueryContainers
          image="grafico"
          table={true}
          to={"#"}
          nameLink="Ver mais"
        >
          Consultas do dia
        </BaseQueryContainers>
      </ContainerHeroContent>
    </WrapperContainerHeroMain>
  );
}
