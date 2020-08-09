import React from "react";
import Router from "./Components/Router";
import Nav from "./Components/Nav";
import styled from "styled-components";
import GlobalStyles from "./Components/GlobalStyles";
import TopBar from "./Components/TopBar";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const NewsForm = styled.div`
  width: 80%;
  height: 100%;
  background-color: blue;
`;

const App = () => (
  <>
    <TopBar />
    <MainContainer>
      <GlobalStyles />
      <Nav />
      <NewsForm>
        <Router />
      </NewsForm>
    </MainContainer>
  </>
);
export default App;
