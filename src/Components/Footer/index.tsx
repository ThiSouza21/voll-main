import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapperFooterMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  background-color: #0b3b60;
  padding: 2em 0;
`;

const ContainerFooterContent = styled.div`
  width: 100%;
  max-width: min(80%, 98em);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  height: auto;
  text-align: center;
  color: #fff;
`;

const ContainerIconsSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  width: 100%;
  flex-wrap: wrap;
`;

const ImageLinksSocialMedia = styled.img`
  height: 1.5em;
`;

export function Footer() {
  return (
    <WrapperFooterMain>
      <ContainerFooterContent>
        <ContainerIconsSocialMedia>
          <Link to="#">
            <ImageLinksSocialMedia src="/assets/facebook.png"></ImageLinksSocialMedia>
          </Link>
          <Link to="#">
            <ImageLinksSocialMedia src="/assets/whatsapp.png"></ImageLinksSocialMedia>
          </Link>
          <Link to="#">
            <ImageLinksSocialMedia src="/assets/google.png"></ImageLinksSocialMedia>
          </Link>
          <Link to="#">
            <ImageLinksSocialMedia src="/assets/instagram.png"></ImageLinksSocialMedia>
          </Link>
        </ContainerIconsSocialMedia>
        <p>2024 © Desenvolvido por ThiSouza.</p>
      </ContainerFooterContent>
    </WrapperFooterMain>
  );
}
