import React from "react";
import styled from "styled-components";

const KeywordContainer = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 500px;
`;

const KeywordBox = styled.div`
  width: 300px;
  padding: 30px;
  box-sizing: content-box;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const KeywordTitle = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Keyword = styled.div`
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const KeywordSet = styled.div`
  margin-bottom: 30px;
`;

const KeywordKey = styled.div`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const KeywordValue = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 5px;
  box-sizing: border-box;

  display: grid;
  row-gap: 10px;
  grid-template-columns: 33.3% 33.3% 33.3%;
  a {
    place-self: center;
    span {
      font-size: 12px;
    }
  }
`;

const KeywordLink = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
  cursor: pointer;
  span {
    color: #353b48;
  }
  span:hover {
    color: #7f8fa6;
  }
`;

export default (props) => {
  let data = props.data;
  return (
    <KeywordContainer>
      <KeywordBox>
        <KeywordTitle style={{ marginBottom: "60px" }}>
          <span
            style={{
              marginRight: "20px",
              fontSize: "30px",
              fontWeight: "bold",
              color: "#2f3640",
            }}
          >
            오늘의 키워드
          </span>
        </KeywordTitle>

        <Keyword>
          {Object.keys(data).map((key, index) => (
            <>
              <KeywordSet key={index}>
                <KeywordKey>
                  <span
                    style={{
                      marginBottom: "30px",
                      fontSize: "20px",
                      color: "#353b48",
                    }}
                  >
                    {key}
                  </span>
                </KeywordKey>

                <KeywordValue>
                  {Object.values(data[key]).map((value, index) => (
                    <KeywordLink
                      key={index}
                      href={`?category=${data[key][0].category}&keyword=${value.keyword}`}
                    >
                      <span id="keyword-data">{value.keyword}</span>
                    </KeywordLink>
                  ))}
                </KeywordValue>
              </KeywordSet>
            </>
          ))}
        </Keyword>
      </KeywordBox>
    </KeywordContainer>
  );
};
