import styled from "styled-components";
import { Header } from "../../Components/Header";
import { ContainerMainHero } from "../../Components/ContainerMainHero";
import { Footer } from "../../Components/Footer";

const WrapperContainerMain = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  min-height: 100svh;
`;

export function PageMain() {
  return (
    <WrapperContainerMain>
      <Header />
      <ContainerMainHero />
      <Footer />
    </WrapperContainerMain>
  );
}
