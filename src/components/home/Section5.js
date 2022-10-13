import styled from "@emotion/styled";
import React from "react";
import { IntegrationSection } from "../../config.data";
import useMediaQuery from "../../hooks/useMediaQuery";
import img from "../../images/integration.svg";
import imgMobile from "../../images/integrationMobile.svg";

function Section5() {
  const isMinWidth780 = useMediaQuery("(min-width: 780px)");
  return (
    <Root>
      <TextSection>
        <Title>
          <h4>{IntegrationSection.title}</h4>
        </Title>
        <Description>{IntegrationSection.description}</Description>
      </TextSection>
      {isMinWidth780 ? <Image src={img} /> : <Image src={imgMobile} />}
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  grid-template-areas:
    "."
    ".";
  justify-content: center;
  align-content: space-between;
  justify-items: center;
  align-items: stretch;
  width: 100%;
  background: #fff;
  padding-block: 20px;
  padding-bottom: 60px;
`;

const Image = styled.img`
  max-width: var(--max-box-width);
  width: 80vw;
  @media (max-width: 893px) {
    width: 80vw;
  }
`;

const TextSection = styled.div`
  text-align: center;
  width: 90vw;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  h4 {
    font-weight: 800;
    font-size: 3.125em;
    color: #56402a;
    white-space: nowrap;
    line-height: 1.6;
    margin: 0;
  }
  align-items: center;

  @media (max-width: 1490px) {
    font-size: 14px;
  }
  @media (max-width: 619px) {
    font-size: 12px;
  }

  @media (max-width: 536px) {
    font-size: 11px;
  }

  @media (max-width: 469px) {
    h4 {
      font-size: 2.95em;
    }
  }
  @media (max-width: 426px) {
    font-size: 10.8px;
  }
  @media (max-width: 400px) {
    font-size: 10.2px;
  }
`;

const Description = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  color: #000000;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export default Section5;
