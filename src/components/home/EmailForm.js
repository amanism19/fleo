import styled from "@emotion/styled";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "../../common/CommonElements";
import validator from "validator";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = () => {
    if (validator.isEmail(email)) {
      setIsLoading(true);
      axios
        .get(` https://staging.fleo.io/v1/email/${email}`)
        .then((data) => {
          setSuccessMessage("You have Successfully booked your free trail!");
        })
        .catch((error) => {
          setErrorMessage(JSON.stringify(error));
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setErrorMessage("Invalid Email !");
    }
  };
  return (
    <>
      <Root>
        <InputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email and book for a free trial"
        />
        <Button style={{ flex: 0.2 }} onClick={handleSendEmail}>
          Submit
        </Button>
      </Root>
      {isLoading && <LoadingMessage>Please Wait !</LoadingMessage>}
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <SuccessMessage>{successMessage}</SuccessMessage>
    </>
  );
};

const Root = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
`;

const LoadingMessage = styled.div`
  color: #119511;
  margin-top: 10px;
`;

const SuccessMessage = styled.div`
  color: #119511;
  margin-top: 10px;
`;

const ErrorMessage = styled.div`
  color: #df581e;
  margin-top: 10px;
`;

const InputField = styled.input`
  flex: 0.8;

  border-radius: 8px;
  border: 1px solid #000;
  height: 60px;
  padding-left: 20px;
  font-size: 24px;
  flex: 1;
  margin-right: -15px;
  @media (max-width: 721px) {
    font-size: 20px;
    height: 50px;
  }
  @media (max-width: 546px) {
    font-size: 18px;
    height: 45px;
  }
  @media (max-width: 515px) {
    font-size: 17px;
    height: 45px;
  }
  @media (max-width: 476px) {
    font-size: 14px;
    height: 40px;
    padding-left: 10px;
  }
  &::placeholder {
    font-style: normal;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.25);
  }
`;

export default EmailForm;
