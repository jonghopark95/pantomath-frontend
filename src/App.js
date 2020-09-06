import React from "react";
import styled from "styled-components";
import TopBar from "./Components/TopBar";
import Router from "./Router";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <>
    <MainContainer>
      <Router />
    </MainContainer>
  </>
);
export default App;
