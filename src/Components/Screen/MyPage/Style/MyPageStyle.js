import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: auto;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Form = styled.div`
  height: 500px;
  width: 100%;
  margin-left: 35px;
  display: grid;
  overflow-x: hidden;
  overflow-y: scroll;
  grid-template-columns: 15% 23% auto;
  grid-template-rows: 30px;
  gap: 20px 0px;
  /* div {
    max-width: 62%;
    overflow-x: hidden;
  } */
`;
