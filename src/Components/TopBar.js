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
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap");
  height: 100%;
  width: 20%;
  /* background-color: lawngreen; */
  font-size: 50px;

  ${(props) => props.theme.putCenter};
  span {
    font-family: "Dancing Script", cursive;
  }
`;

export default () => (
  <TopBar>
    <LogoForm>
      <span>Pantomath</span>
    </LogoForm>
  </TopBar>
);
