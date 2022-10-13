import styled from "@emotion/styled";
import React from "react";
import quotes from "../../../images/qotes.svg";

const ShowCard = ({ item, buttonHeight }) => {
  return (
    <Root style={{ height: buttonHeight ? buttonHeight : "" }}>
      <Image src={item.image} />
      <TextSection>
        <span className="title">{item.title}</span>
        <span className="desc">{item.description}</span>
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
`;
const Image = styled.img`
  border-left: 2px solid #e55a10;
  width: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 0px 20px 20px 0px;
  @media (max-width: 555px) {
    width: 150px;
  }
  @media (max-width: 465px) {
    width: 106px;
  }
`;

const Quotes = styled.img`
  margin-top: auto;
  margin-right: 0px;
  @media (max-width: 477px) {
    width: 40px;
    /* margin-right: 0px; */
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
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 30px;
  padding-right: 20px;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;

  .title {
    font-size: 24px;
    font-weight: 700;
  }
  .desc {
    font-weight: 400;
    font-size: 18px;
    color: #000000;

    letter-spacing: 0.7px;
  }
  .name {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #000000;
    white-space: nowrap;
  }
  .position {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-top: 10px;
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
  }

  @media (max-width: 578px) {
    gap: 10px;
    .title {
      font-weight: 700;
      font-size: 22px;
      line-height: 1.3;
      color: #000000;
    }
    .desc {
      font-weight: 400;
      font-size: 17px;
      color: #000000;
    }
    .name {
      font-weight: 700;
      font-size: 28px;
      color: #000000;
    }
    .position {
      font-weight: 400;
      font-size: 15px;
      line-height: 13px;
      color: #000000;
    }
  }
  @media (max-width: 565px) {
    gap: 5px;
    .title {
      font-size: 21px;
    }
    .desc {
      font-size: 16px;
    }
    .name {
      font-size: 25px;
    }
    .position {
      font-size: 14px;
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
    gap: 5px;
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
`;

export default ShowCard;
