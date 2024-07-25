import styled from "styled-components";

interface ImagesOptions {
  consulta: string;
  avaliacao: string;
  grafico: string;
}

interface Props {
  children?: React.ReactNode;
  image?: string;
}

const ContainerTitleInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2em;
  flex-wrap: wrap;
  word-break: break-word;
  height: auto;
`;

const ContainertTopTexts = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2em;

  > h1 {
    width: 100%;
    color: #339cff;
    word-break: break-word;
  }
`;

const ImageTopText = styled.img`
  height: 1.4em;
`;

export function TitleContainerQuery({ children, image }: Props) {
  const literalsImages: ImagesOptions = {
    consulta: "consulta",
    grafico: "grafico",
    avaliacao: "avaliacao",
  };

  return (
    <ContainerTitleInfos>
      <ContainertTopTexts>
        {image && (
          <ImageTopText
            src={`/assets/${literalsImages[image as keyof ImagesOptions]}.png`}
          />
        )}
        <h1>{children}</h1>
      </ContainertTopTexts>
    </ContainerTitleInfos>
  );
}
