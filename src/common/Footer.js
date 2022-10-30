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
      <div className="Top">
        <img className="logo" alt="" src={whitelogo} />

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
      </div>
      <div className="Bottom">
        <ContactInfo>
          <p>Email: hello@fleo.io</p>
          <p>Phone: +91 87654 44000</p>
          <p>
            Address: No. 1207/343, 9th Main, Sector 7, HSR Layout, Bengaluru,
            Karnataka - 560102
          </p>
        </ContactInfo>
        <Words>
          <p>
            Fleo shows you the areas that need your attention, it will be your
            go-to tool for internal business reviews
          </p>
        </Words>
      </div>
    </Root>
  );
}

const Root = styled.div`
  /* height: 444px; */
  background: #56402a;
  flex-direction: column;
  display: flex;
  /* align-items: center; */
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
  .Top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .Bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    margin-left: -20px;
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
    .Top {
      flex-direction: column;
      gap: 30px;
    }
    .Bottom {
      display: none;
    }
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

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 5px; */
  p {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    margin: 0px;
    line-height: 1.7;
  }
  width: 40%;
`;

const Words = styled.div`
  width: 30%;

  p {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    margin: 0px;
    line-height: 1.7;
  }
  margin-right: -8px;
`;

export default Footer;
