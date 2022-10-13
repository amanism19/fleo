import React from "react";
import styled from "@emotion/styled";
import image from "../../images/section_2_ilstr.png";
import { PlanningSection } from "../../config.data";

function Section2() {
  return (
    <Root>
      <Image src={image} />
      <TextSection>
        <h2 className="hidable-h3">{PlanningSection.title1}</h2>
        {/* <h2>{PlanningSection.title2}</h2> */}
        <p>
          <h3>{PlanningSection.description}{" "}</h3>
          <span className="hidable">{PlanningSection.hidableDescription}</span>
        </p>
      </TextSection>
    </Root>
  );
}

export default Section2;

const Root = styled.div`
  display: flex;
  background: #56402a;
  align-items: center;
  max-width: var(--max-box-width);
  padding-block: 100px;
  gap: 60px;
  @media (max-width: 1325px) {
    padding-inline: 40px;
  }
  @media (max-width: 887px) {
    flex-direction: column-reverse;
    padding-block: 50px;
  }
`;

const Image = styled.img`
  flex: 0.5;
  height: auto;
  width: 50%;
  object-fit: contain;
  @media (max-width: 887px) {
    flex-direction: column-reverse;
    padding-block: 50px;
    width: 80%;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  width: 90%;

  h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 3.125em;
    line-height: 1.3;
    margin: 0;

    color: #F5F5F5;
  }
  h3 {
    color: #FFC055;
  }

  p {
    margin: 0;
    margin-top: 10px;

    font-weight: 400;
    font-size: 1.45em;
    /* letter-spacing: 0.1px; */
    line-height: 1.6;
    /* letter-spacing: 0.8px; */
    color: #FFFFFF;
  }

  @media (max-width: 1490px) {
    font-size: 14px;
  }

  @media (max-width: 1141px) {
    font-size: 12.5px;
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1.7em;
    }
  }

  @media (max-width: 887px) {
    font-size: 12px;
    text-align: center;
    align-items: center;
    p {
      font-size: 1.7em;
      line-height: 1.4;

      .hidable {
        display: none;
      }
    }
    .hidable-h3 {
      display: none;
    }
  }

  @media (max-width: 532px) {
    font-size: 11px;
  }

  @media (max-width: 469px) {
    h2 {
      font-size: 2.95em;
    }
  }

  @media (max-width: 400px) {
    p {
      width: 88%;
    }
  }
`;
