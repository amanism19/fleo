import styled from "@emotion/styled";

export const Button = styled.button`
  border-radius: 12px;
  background: #df581e;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: #fff; */
    /* color: #56402a; */
    background: #bf510b;
  }
  @media (max-width: 510px) {
    font-size: 18px;
    font-weight: 500;
  }
  @media (max-width: 400px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const IconBG = styled.div`
  border-radius: 8px;
  height: 45px;
  width: 45px;
  background: #df581e;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;
