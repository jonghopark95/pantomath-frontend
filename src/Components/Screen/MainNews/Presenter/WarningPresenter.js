import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <Div>
      <i
        class="far fa-hand-pointer"
        style={{ fontSize: "100px", color: "#2f3640", marginBottom: "100px" }}
      ></i>

      <h1 style={{ fontSize: "40px", color: "#2f3640" }}>
        키워드를 선택해 주세요.
      </h1>
    </Div>
  );
};
