import styled from "@emotion/styled";
import { IconBG } from "../../common/CommonElements";

const BookTrailCard = ({ title, description, icon }) => {
  return (
    <Root>
      <StyledIconBG>
        <img alt="" src={icon} />
      </StyledIconBG>
      <Main>
        <strong> {title}</strong>
        <small>{description}</small>
      </Main>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledIconBG = styled(IconBG)`
  margin-top: 3px;
  margin-left: 5px;
  @media (max-width: 618px) {
    height: 39px;
    width: 39px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  text-align: left;
  margin-left: 20px;
  flex: 1;
  strong {
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    color: #000000;
    white-space: nowrap;
  }
  small {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #000000;
  }
  @media (max-width: 618px) {
    strong {
      font-size: 15px;
    }
    small {
      font-size: 12px;
    }
  }
`;

export default BookTrailCard;
