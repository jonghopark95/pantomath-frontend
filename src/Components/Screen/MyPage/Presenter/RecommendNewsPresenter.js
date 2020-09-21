import React from "react";
import styled from "styled-components";

const PercentageDiv = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  gap: 30px 10px;
  font-size: 25px;
`;

export default (props) => {
  let data = props.data;

  data = data.filter((data) => data.fields.category !== "전체");

  const keywordData = data.map((data) => data.fields.category);

  let categoryData = {};

  for (let i = 0; i < keywordData.length; i++) {
    let num = keywordData[i];
    categoryData[num] = categoryData[num] ? categoryData[num] + 1 : 1;
  }

  let percentage = {};

  for (let [key, value] of Object.entries(categoryData)) {
    percentage[key] = `${
      Math.floor((value / keywordData.length) * 1000) / 10
    }%`;
  }

  console.log(percentage);
  return (
    <>
      <PercentageDiv>
        {Object.entries(percentage).map(([key, value]) => (
          <>
            <span>{key}</span>
            <span>{value}</span>
          </>
        ))}
      </PercentageDiv>
    </>
  );
};
