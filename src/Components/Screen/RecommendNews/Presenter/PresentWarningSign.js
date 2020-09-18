import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 600px;
  height: 800px;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Div>
      <i
        class="fas fa-exclamation"
        style={{ fontSize: "100px", color: "#c23616", marginBottom: "100px" }}
      ></i>

      <h1 style={{ fontSize: "40px", color: "#2f3640" }}>
        먼저 로그인 해 주세요.
      </h1>
    </Div>
  );
};
