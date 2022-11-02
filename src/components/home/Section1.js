import React from "react";
// import image from "../../images/ill.svg";
import image from "../../images/ill2.png";
import styled from "@emotion/styled";
import { NavBtnLink } from "../../common/NavBarElements";
import { Landing } from "../../config.data";
import useMediaQuery from "../../hooks/useMediaQuery";

function Section1() {
  const isMobile = useMediaQuery("(max-width: 1116px)");

  const mode = isMobile ? "mobile" : "desktop";

  return (
    <>
      <Root>
        <Main>
          <TextSection>
            <h2>{Landing[mode].title1}</h2>
            <h2>{Landing[mode].title2}</h2>

            <strong>
              {Landing[mode].description}
              <span className="showBar" />
            </strong>
            <StyledButtonLink to="/demo">Show Demo</StyledButtonLink>
          </TextSection>
          <Image alt="" src={image} />
        </Main>
      </Root>
      {/* <PartnersMain> */}
      <InfoSec>
        <main>
          {/* {BrandsSection.map((logo) => (
            <img alt="" src={logo} className="client_logo" />
          ))}
          {BrandsSection.map((logo) => (
            <img  alt="" src={logo} className="client_logo" />
          ))} */}
          <InfoSecBox>
            <InfoSecBoldText>2000+</InfoSecBoldText>
            <InfoSecRegularText>Active Users</InfoSecRegularText>
          </InfoSecBox>

          <InfoSecBox>
            <InfoSecBoldText>100+ hours</InfoSecBoldText>
            <InfoSecRegularText>saved in business review</InfoSecRegularText>
          </InfoSecBox>

          <InfoSecBox>
            <InfoSecBoldText>10,000+ </InfoSecBoldText>
            <InfoSecRegularText>OKR being tracked</InfoSecRegularText>
          </InfoSecBox>
        </main>
      </InfoSec>
      {/* </PartnersMain> */}
      <StyledButtonLink className="forMobile" to="/demo">
        Request Demo
      </StyledButtonLink>
    </>
  );
}

export default Section1;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: var(--max-box-width - 20px); */
  padding-inline: var(--margin-inline-root);
  overflow: hidden;
  width: calc(100%);
  padding-bottom: 15px;
`;

const StyledButtonLink = styled(NavBtnLink)`
  font-size: 18px;
  margin-top: 25px;
  margin-left: 0px;
  display: flex;
  &.forMobile {
    display: none;
  }
  @media (max-width: 1116px) {
    &.forMobile {
      display: flex;
      align-self: stretch;
      margin-left: calc(var(--margin-inline-root) + 1rem);
      margin-right: calc(var(--margin-inline-root) + 1rem);
    }
    display: none;
  }
`;

const PartnersMain = styled.div`
  background-color: #ffffff;
  gap: 10px;
  height: 100px;
  width: calc(100vw - 20px);
  overflow: hidden;
  align-items: center;
  display: flex;
  main {
    align-items: center;
    display: flex;
    gap: 10px;
    height: 90px;
    justify-content: space-evenly;
    display: inline-flex;
    animation: scrolling-left1 20s linear infinite;
  }

  @keyframes scrolling-left1 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .client_logo {
    height: 40px;
    width: auto;
    object-fit: contain;
    margin-right: 40px;
  }
  @media (max-width: 900px) {
    justify-content: space-evenly;
    .client_logo {
      height: 30px;
      gap: 0px;
    }
  }
  @media (max-width: 777px) {
    justify-content: space-evenly;
    .client_logo {
      height: 25px;
      gap: 0px;
    }
    height: 75px;
  }
  @media (max-width: 595px) {
    justify-content: space-evenly;
    .client_logo {
      height: 23px;
      gap: 0px;
    }
    .hidable {
      display: none;
    }
  }

  @media (max-width: 432px) {
    .client_logo {
      height: 24px;
    }
    width: calc(100vw);
  }
`;

const Main = styled.div`
  max-width: var(--max-box-width);
  align-self: center;
  display: flex;
  justify-content: space-between;
  text-align: left;
  /* height: calc(100vh - 80px); */
  margin-top: 80px;
  align-items: center;
  gap: 10px;
  @media (max-width: 1116px) {
    margin-top: 10px;

    text-align: center;
    flex-direction: column;
    gap: 90px;
  }
  @media (max-width: 430px) {
    /* margin-top: -20px; */
  }
`;

const Image = styled.img`
  flex: 0.6;
  height: auto;
  width: 51.5vw;
  object-fit: contain;
  margin-right: -8vw;
  @media (max-width: 1710px) {
    
    margin-right: -3vw;
  }
  @media (max-width: 1116px) {
    width: 75vw;
    flex: 1;
    margin-right: -30%;
    margin-top: -18.5rem;
    /* margin-right: calc(var(--margin-inline-root) * -1 + -150px); */
  }
  @media (max-width: 723px) {
    margin-top: 0px;
  }

  @media (max-width: 580px) {
    /* margin-right: -50%; */
    margin-left: -2%;
    width: 130%;
  }
  @media (max-width: 430px) {
    /* margin-right: -50%; */
    margin-left: -27%;
    width: 150%;
  }
`;

const TextSection = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  min-height: 30rem;
  font-size: calc(16 * 0.057vw);
  margin-right: 50px;
  h2 {
    font-weight: 800;
    font-size: 2.7em;
    color: #56402a;
    white-space: nowrap;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 1116px) {
    align-items: center;
  }

  strong {
    display: flex;
    flex-direction: row-reverse;

    font-weight: 600;
    font-size: 1.3em;
    line-height: 1.7;
    color: #000000;
    margin-top: 20px;
    .showBar {
      display: block;
      width: 7px;
      background: #e07c1f;
      margin-right: 25px;
    }
    @media (max-width: 1116px) {
      flex-direction: column;
      align-items: center;
      .showBar {
        width: 90px;
        height: 5px;
        background: #e07c1f;
        margin: 0px;
        margin-top: 15px;
      }
    }
  }

  @media (max-width: 1116px) {
    margin-right: 0px;
    max-width: 30rem;
  }

  @media (max-width: 1490px) {
    font-size: 14px;
  }

  @media (max-width: 723px) {
    min-height: fit-content;
  }
  @media (max-width: 619px) {
    font-size: 12px;
  }
  @media (max-width: 536px) {
    font-size: 11px;
    margin-right: 0;
    margin-left: 0;
    h2 {
      width: 95vw;
      white-space: unset;
      padding-inline: 16px;
    }
    strong {
      width: 95vw;
      padding-inline: 16px;
    }
    max-width: 80vw;
  }

  @media (max-width: 469px) {
    h2 {
      font-size: 2.95em;
    }
  }
  @media (max-width: 426px) {
    font-size: 10.8px;
    strong {
      margin-top: 20px;
    }
  }

  @media (max-width: 426px) {
    /* margin-left: 0.5rem;
    margin-right: 0.5rem; */
  }
  @media (max-width: 400px) {
    font-size: 10.2px;
  }
`;

export const InfoSec = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: var(--max-box-width - 20px); */
  padding-inline: var(--margin-inline-root);
  /* padding-block: 4px; */
  overflow: hidden;
  width: calc(100%);
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.69);
  mix-blend-mode: normal;
  box-shadow: inset 1px 1px 13px rgba(0, 0, 0, 0.08);
  main {
    max-width: var(--max-box-width);
    width: calc(100%);
    align-items: center;
    display: flex;
    gap: 10px;
    height: 84px;
    justify-content: space-between;
    display: flex;
  }
  @media (max-width: 722px) {
    padding-inline: calc(var(--margin-inline-root) - 5px);
  }
`;

export const InfoSecBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: center;
  @media (max-width: 722px) {
  }
  @media (max-width: 400px) {
    gap: 0px;
  }
`;

export const InfoSecBoldText = styled.div`
  /* font-family: "Mulish"; */
  font-weight: 800;
  font-size: 29px;
  color: #56402a;
  text-transform: uppercase;
  @media (max-width: 980px) {
    font-size: 23px;
  }
  @media (max-width: 680px) {
    font-size: 21px;
  }
  @media (max-width: 488px) {
    font-size: 19px;
  }

  @media (max-width: 387px) {
    font-size: 19px;
  }
`;

export const InfoSecRegularText = styled.div`
  font-weight: 400;
  font-size: 17px;
  text-transform: uppercase;
  color: #000000;

  @media (max-width: 980px) {
    font-size: 14px;
  }
  @media (max-width: 680px) {
    font-size: 13px;
  }
  @media (max-width: 488px) {
    font-size: 11px;
  }

  @media (max-width: 387px) {
    font-size: 10px;
  }
`;
