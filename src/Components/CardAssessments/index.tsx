import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  nome: string;
  especialidade: string;
  nota: string[];
  imagem: string;
}

const WrapperCardAssessments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1em;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px -15px #000;
`;

const ContainerCardAssessments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2em;
  height: auto;

  > div {
    display: flex;
    align-items: center;
    gap: 1em;

    > div {
      line-height: 1.6em;

      p {
        color: #6b6e71;
      }
      h3 {
        font-size: 1.1em;
        color: #6b6e71;
      }
    }
  }
`;

const ImageProfile = styled.img`
  height: 5em;
  width: 5em;
  border-radius: 100%;
  border: 2px solid #339cff;
`;

export function CardAssessments({ nome, nota, especialidade, imagem }: Props) {
  return (
    <WrapperCardAssessments>
      <ContainerCardAssessments>
        <div>
          <ImageProfile src={imagem} alt="Imagem Perfil" />
          <div>
            <h3>{nome}</h3>
            <p>{especialidade}</p>
          </div>
        </div>
        <p>
          {nota.map((src, i) => {
            return <img key={i} src={src} alt="Foto do Profissional" />;
          })}
        </p>
      </ContainerCardAssessments>
    </WrapperCardAssessments>
  );
}
