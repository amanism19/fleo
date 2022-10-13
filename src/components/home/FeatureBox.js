import styled from "@emotion/styled";
import React from "react";

function FeatureBox({ item }) {
  return (
    <Root style={{ top: 150 + item.top, transform: `scale(${item.scale})` }}>
      <RootInner>
        <Image alt="image" src={item.image} />
        <TextSection>
          <Title>
            <strong>{item.title}</strong>
          </Title>
          <Description>{item.description}</Description>
        </TextSection>
      </RootInner>
    </Root>
  );
}

const Root = styled.div`
  position: sticky;
  top: 90px;
`;

const RootInner = styled.div`
  box-shadow: 5px -15px 10px #0000001c, 5px 15px 10px #0000001c;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  padding-inline: 50px;
  padding-block: 50px;

  margin: 20px;
  background-color: #ffffff;
  @media (max-width: 600px) {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
  }
`;

const Image = styled.img`
  @media (max-width: 600px) {
    flex: 1;
    height: auto;
    width: 100%;
    object-fit: contain;
    padding-left: calc((100vw - 1000px) / 6);
    margin-bottom: 20px;
  }
  @media screen and (min-width: 600px) {
    width: 100%;
  }
`;

const TextSection = styled.div`
  flex: 0.4;
  text-align: left;
  padding-left: 45px;
  @media screen and (max-width: 600px) {
    padding-left: 0px;
  }
  strong {
    font-size: 24px;
    color: #56402a;
    font-weight: 700;
  }
`;

const Title = styled.div`
  padding-left: 20px;
  margin-bottom: 30px;
  border-left: 4px solid #56402a;
  strong {
  }
`;

const Description = styled.div``;

export default FeatureBox;
