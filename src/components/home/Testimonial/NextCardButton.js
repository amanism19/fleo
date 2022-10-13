import styled from "@emotion/styled";
import React from "react";
import rightArrow from "../../../images/right_arrow.svg";

const NextCardButton = ({ item, ...props }) => {
  return (
    <Root {...props}>
      <Arrow alt="" src={rightArrow} />
      <Image alt="" src={item.image} />
    </Root>
  );
};

const Root = styled.div`
  margin-right: 40;
  position: relative;
  background-color: #df7b1e99;
  border-radius: 0px 20px 20px 0px;
  @media (max-width: 835px) {
    display: none;
  }
  cursor: pointer;
  user-select: none;
`;

const Image = styled.img`
  width: 200px;
  object-fit: cover;
  opacity: 0.2;
  height: 100%;
  border-radius: 0px 20px 20px 0px;
  @media (max-width: 1039px) {
    width: 150px;
  }
  @media (max-width: 925px) {
    width: 100px;
  }
`;

const Arrow = styled.img`
  width: 40;
  top: 50%;
  right: 45%;
  object-fit: cover;
  height: auto;
  position: absolute;
`;

export default NextCardButton;
