import styled from "@emotion/styled";
import React from "react";
import quotes from "../../../images/qotes.svg";

const ShowCard = ({ item, buttonHeight }) => {
  return (
    <Root style={{ height: buttonHeight ? buttonHeight : "" }}>
      <Image src={item.image} />
      <TextSection>
        <span className="title">{item.title}</span>
        <p className="desc">{item.description}</p>
        <p className="desc bold">{item.descriptionHighlighted}</p>
        <div className="infoArea">
          <div className="infoAreaText">
            <span className="name">{item.name}</span>
            <span className="position">{item.position}</span>
          </div>
          <Quotes src={quotes} />
        </div>
      </TextSection>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  gap: 10px;
  width: 90vw;
  cursor: pointer;
  user-select: none;
  @media (max-width: 835px) {
    max-width: 90vw;
  }
  /* @media (max-width: 452px) {
    max-width: calc(100vw - 100px);
  } */
`;
const Image = styled.img`
  border-left: 2px solid #e55a10;
  width: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 0px 20px 20px 0px;
  @media (max-width: 565px) {
    width: 150px;
  }
  @media (max-width: 465px) {
    width: 126px;
  }
`;

const Quotes = styled.img`
  margin-top: auto;
  margin-right: 0px;
  margin-bottom: 5px;
  @media (max-width: 722px) {
    width: 43px;
    margin-top: -5px;
    margin-right: -8px;
  }
  @media (max-width: 477px) {
    width: 40px;
    /* margin-right: 0px; */
    margin-top: -0px;
    margin-right: -5.5px;
  }
  @media (max-width: 364px) {
    width: 30px;
  }
  @media (max-width: 325px) {
    width: 29px;
  }
`;

const TextSection = styled.div`
  flex: 1;

  background-image: radial-gradient(
      circle at 100% 100%,
      transparent -3px,
      #ffffff -3px,
      #ffffff 1px,
      transparent 1px
    ),
    linear-gradient(to right, #ffffff, #ffffff),
    radial-gradient(
      circle at 0% 100%,
      transparent -3px,
      #ffffff -3px,
      #ffffff 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, #ffffff, #e55a10),
    radial-gradient(
      circle at 0% 0%,
      transparent -3px,
      #e55a10 -3px,
      #e55a10 1px,
      transparent 1px
    ),
    linear-gradient(to left, #e55a10, #ffffff),
    radial-gradient(
      circle at 100% 0%,
      transparent -3px,
      #ffffff -3px,
      #ffffff 1px,
      transparent 1px
    ),
    linear-gradient(to top, #ffffff, #ffffff);
  background-size: 1px 1px, calc(100% - 2px) 3.5px, 1px 1px,
    3.5px calc(100% - 2px);
  background-position: top left, top center, top right, center right,
    bottom right, bottom center, bottom left, center left;
  background-repeat: no-repeat;
  padding-left: 10px;
  padding-right: 20px;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-evenly;

  .title {
    font-size: 21px;
    font-weight: 700;
    color: #56402a;
  }
  .desc {
    font-weight: 500;
    font-size: 15.5px;
    color: #000000;
    line-height: 1.45;
    letter-spacing: 0.1px;
    margin: 0px;
    margin-block: 7px;
  }
  .bold {
    font-weight: 700;
  }
  .name {
    font-weight: 700;
    font-size: 26px;
    color: #df581e;
    white-space: nowrap;
    line-height: 1;
  }
  .position {
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    margin-top: 4px;
    white-space: nowrap;
  }
  .infoArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .infoAreaText {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    gap: 1px;
  }

  @media (max-width: 722px) {
    .title {
      font-size: 18px;
    }
    .desc {
      font-size: 14px;
      line-height: 1.4;
      margin-block: 2px;
    }
    .name {
      font-size: 18.5px;
    }
    .position {
      font-size: 14px;
    }
  }

  @media (max-width: 565px) {
    padding-top: 5px;
    padding-left: 5px;
    padding-bottom: 15px;
    padding-right: 15px;
    .name {
      font-size: 21px;
    }
    .position {
      font-size: 13px;
    }
  }

  @media (max-width: 493px) {
    gap: 5px;
    .title {
      font-size: 20px;
    }
    .desc {
      font-size: 14px;
    }
    .name {
      font-size: 22px;
    }
    .position {
      font-size: 14px;
    }
  }
  @media (max-width: 477px) {
    .title {
      font-size: 19px;
    }
    .desc {
      font-size: 14px;
    }
    .name {
      font-size: 20px;
    }
    .position {
      font-size: 15px;
    }
  }

  @media (max-width: 465px) {
    padding-top: 5px;
    padding-left: 5px;
    padding-bottom: 15px;
    padding-right: 15px;
    .title {
      font-size: 18px;
    }
    .desc {
      font-size: 14px;
    }
    .position {
      margin-top: 5px;
    }
  }
  @media (max-width: 420px) {
    .name {
      font-size: 17px;
    }
    .position {
      margin-top: 0px;
      font-size: 12px;
    }
  }
  @media (max-width: 382px) {
    .title {
      font-size: 18px;
    }
    .desc {
      font-size: 12px;
    }
    .name {
      font-size: 16px;
    }
    .position {
      font-size: 11px;
    }
    .infoAreaText {
      gap: 5px;
    }
  }
  @media (max-width: 364px) {
    .name {
      font-size: 15px;
    }
    .position {
      margin-top: -7px;
      font-size: 10px;
    }
  }
  @media (max-width: 325px) {
    .title {
      font-size: 15px;
    }
    .desc {
      font-size: 11px;
    }
    padding-top: 0px;
    padding-left: 2px;
    padding-bottom: 12px;
    padding-right: 16px;
  }
`;

export default ShowCard;
