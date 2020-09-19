import React from "react";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Div = styled.div`
  width: 600px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconDiv = styled.div`
  animation: ${rotation} 0.8s infinite ease-in-out;
`;

export default () => {
  return (
    <Div>
      <IconDiv>
        <i
          class="fas fa-spinner"
          style={{
            fontSize: "100px",
            color: "#2f3640",
          }}
        ></i>
      </IconDiv>

      <h1 style={{ fontSize: "40px", color: "#2f3640", marginTop: "100px" }}>
        로딩중입니다...
      </h1>
    </Div>
  );
};
