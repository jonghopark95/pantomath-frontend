import React from "react";
import styled from "styled-components";

const TopBar = styled.header`
  height: 10vh;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: lavender;
`;

const LogoForm = styled.div`
  height: 100%;
  width: 20%;
  background-color: lawngreen;
`;

export default () => (
  <TopBar>
    <LogoForm />
  </TopBar>
);
