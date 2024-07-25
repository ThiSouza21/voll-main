import styled from "styled-components";

const WrapperHeaderMain = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  position: fixed;
  top: 0;
`;

const ContainerHeaderContent = styled.div`
  width: 100%;
  max-width: min(80%, 98em);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  height: auto;
  padding: 0.8em 0;
`;

const ImageLogoVoll = styled.img`
  height: 1.5em;
`;

const ImageLoginVoll = styled.img`
  height: 3%.5;
`;

const ContainerRegisterAccount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.4em;
`;

const ButtonAccount = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ButtonExitAccount = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.1em;
  text-decoration: underline;
`;

export function Header() {
  return (
    <WrapperHeaderMain>
      <ContainerHeaderContent>
        <ImageLogoVoll src="/assets/logo.png" alt="Logo Voll" />
        <ContainerRegisterAccount>
          <ButtonAccount>
            <ImageLoginVoll src="/assets/perfil.png" alt="Icone Account" />
          </ButtonAccount>
          <ButtonExitAccount>Sair</ButtonExitAccount>
        </ContainerRegisterAccount>
      </ContainerHeaderContent>
    </WrapperHeaderMain>
  );
}
