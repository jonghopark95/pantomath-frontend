import React from "react";
import Nav from "./Components/Nav";
import styled from "styled-components";
import TopBar from "./Components/TopBar";
import Router from "./Router";

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
      <Router />
    </MainContainer>
  </>
);
export default App;
