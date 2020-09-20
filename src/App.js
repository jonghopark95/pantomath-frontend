import React from "react";
import styled from "styled-components";
import Router from "./Router";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  .swiper-pagination-bullets {
    top: 42% !important;
  }
  .swiper-pagination-bullet-active {
    background-color: rgb(47, 54, 64);
  }
`;

const App = () => (
  <>
    <MainContainer>
      <Router />
    </MainContainer>
  </>
);
export default App;
