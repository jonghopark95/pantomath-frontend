import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const TopBar = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  background-color: lavender;
`;

const LogoForm = styled.div`
  height: 100%;
  width: 365px;
  font-size: 50px;

  ${(props) => props.theme.putCenter};
  span {
    font-family: "Dancing Script", cursive;
  }
`;

export default () => {
  const [category, setCategory] = useState("추천 뉴스");
  return (
    <TopBar>
      <LogoForm>
        <span>Pantomath</span>
      </LogoForm>
      <Nav setCategory={setCategory} />
    </TopBar>
  );
};
