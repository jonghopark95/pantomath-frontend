import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: auto;
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
        style={{ fontSize: "50px", color: "#c23616", marginBottom: "30px" }}
      ></i>

      <h1 style={{ fontSize: "20px", color: "#2f3640" }}>기록이 없습니다.</h1>
    </Div>
  );
};
