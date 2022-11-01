import React from "react";
import icon1 from "../../images/Vector.svg";
import icon2 from "../../images/Vector-1.svg";
import icon3 from "../../images/Vector-2.svg";
import icon4 from "../../images/Vector-3.svg";
import icon5 from "../../images/Vector-4.svg";
import icon6 from "../../images/Vector-5.svg";
import okrsList from "../../images/okrs_list.png";
import BookTrailCard from "./BookTrailCard";
import EmailForm from "./EmailForm";
import styled from "@emotion/styled";
import { TrialSection } from "../../config.data";

const BookTrailSection = () => {
  return (
    <Root>
      <Title>{TrialSection.title}</Title>
      <EmailForm />
      <Main>
        {/* <BookTrailList> */}
        {TrialSection.list1.map((i, index) => (
          <BookTrailCard
            key={index}
            icon={i.icon}
            title={i.title}
            description={i.description}
          />
        ))}
        {/* </BookTrailList> */}

        {/* <ImageContainer className="big">
          <Image alt="" src={okrsList} className="big" />
        </ImageContainer> */}

        {/* <BookTrailList> */}
        {TrialSection.list2.map((i, index) => (
          <BookTrailCard
            key={index}
            icon={i.icon}
            title={i.title}
            description={i.description}
          />
        ))}
        {/* </BookTrailList> */}
      </Main>

      {/* <ImageContainer className="small">
        <Image alt="" src={okrsList} className="small" />
      </ImageContainer> */}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: var(--margin-inline-root);
  padding-block: 100px;
  min-height: 95vh;
  max-width: var(--max-box-width);
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  color: #56402a;
  margin-bottom: 10px;
  @media (max-width: 1030px) {
    font-weight: 800;
    font-size: 32px;
    text-align: center;
    color: #56402a;
  }
`;

const Main = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-top: 60px;
  gap: 15px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 35px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &.small {
    display: none;
    margin-top: 80px;
  }
  @media (max-width: 1030px) {
    &.big {
      display: none;
    }
    &.small {
      display: flex;
    }
  }
`;

const Image = styled.img`
  align-self: center;
  width: 90%;
  height: auto;
  margin-left: -5px;
  &.small {
    margin-left: -10px;
    width: 100%;
    max-width: 90vw;
  }
  @media (max-width: 476px) {
    margin-top: -50px;
  }
`;

const BookTrailList = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 50px;
  @media (max-width: 476px) {
    margin-bottom: 50px;
  }
`;

export default BookTrailSection;
