import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";

import Footer from "./common/Footer";
import Header from "./common/Header";
import Home from "./components/home/Home";
import Products from "./components/products/Products";

function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Container>
        </Main>
        <Footer />
      </Router>
    </Root>
  );
}

export default App;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  --margin-inline-root: 3rem;
  --max-box-width: 80rem;
  @media (max-width: 723px) {
    --margin-inline-root: 1.3rem;
  }
  @media (max-width: 426px) {
    --margin-inline-root: 1rem;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  @media (max-width: 723px) {
    margin-top: 180px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 74rem; */
`;
