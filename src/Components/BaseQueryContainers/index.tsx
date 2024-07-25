import styled from "styled-components";
import { TitleContainerQuery } from "../TitleContainerQuery";
import { TableQuerys } from "../TableQuerys";
import { NavLinks } from "../../NavLinks";

interface Props {
  children?: React.ReactNode;
  nameLink?: string;
  to: string;
  image?: string;
  table?: boolean;
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
}: Props) {
  return (
    <WrapperContainerHeroMain>
      <ContainerHeroContent>
        <TitleContainerQuery image={image}>{children}</TitleContainerQuery>
        {table && <TableQuerys />}
        <NavLinks to={to}>{nameLink}</NavLinks>
      </ContainerHeroContent>
    </WrapperContainerHeroMain>
  );
}
