import React from "react";
import whitelogo from "../images/fleo_white.svg";
import fb from "../images/fb.svg";
import whatsapp from "../images/whatsapp.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Root className="footer_main">
      <img alt="" src={whitelogo} />

      <div className="linkContainer">
        <Link to="/">About Us</Link>
        <Link to="/">Privacy policy</Link>
        <Link to="/">Terms and conditions</Link>
        <Link to="/">Contact Us</Link>
      </div>

      <div className="footer_social">
        <div className="footer_social_inner">
          <a href="/#">
            <img alt="" src={linkedin} className="social_icons" />
          </a>

          <a href="/#">
            <img alt="" src={fb} className="social_icons" />
          </a>
          <a href="/#">
            <img alt="" src={whatsapp} className="social_icons" />
          </a>
          <a href="/#">
            <img alt="" src={twitter} className="social_icons" />
          </a>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.div`
  /* height: 444px; */
  background: #56402a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding-top: 60px;
  padding-bottom: 40px;
  color: #fff;
  max-width: var(--max-box-width);
  padding-inline: var(--margin-inline-root);

  @media (min-width: 1296px) {
    max-width: 100%;
  }

  .linkContainer {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      text-align: center;
      color: #ffffff;
    }
  }

  .footer_social {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer_social_inner {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .footer_main {
    height: 444px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1090px) {
    flex-direction: column;
    .footer_address {
      display: none;
    }
    .footer_quote {
      display: none;
    }

    padding-top: 50px;

    .linkContainer {
      flex-direction: column;
    }
  }
`;

export default Footer;
