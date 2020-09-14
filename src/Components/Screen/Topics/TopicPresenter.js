import React from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import parse from "html-react-parser";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  ${(props) => props.theme.putCenter}
`;

const KeywordContainer = styled.div`
  width: 20%;
  height: calc(100% - 70px);
  background-color: purple;
  ${(props) => props.theme.putCenter}
`;

const NewsContainer = styled.div`
  width: 80%;
  height: calc(100% - 70px);
  background-color: yellowgreen;
  ${(props) => props.theme.putCenter}
`;

const KeywordBox = styled.div`
  height: 600px;
  width: 300px;
  padding: 30px;
  box-sizing: content-box;
  background-color: lavender;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Keyword = styled.div`
  height: 530px;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const KeywordSet = styled.div``;

const KeywordTitle = styled.span`
  font-size: 40px;
`;

const KeywordKey = styled.div`
  width: 100%;
  height: 30px;
  background-color: purple;
  ${(props) => props.theme.putCenter};
`;

const KeywordValue = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 5px;
  box-sizing: border-box;
  background-color: khaki;
  display: grid;
  row-gap: 10px;
  grid-template-columns: 50% 50%;
  a {
    place-self: center;
    span {
      font-size: 15px;
    }
  }
`;

const KeywordLink = styled.a`
  text-decoration: none;
`;

const NewsBox = styled.div`
  height: 600px;
  width: 1200px;
  background-color: ghostwhite;
`;

const NewsLink = styled.a`
  text-decoration: none;
`;

const News = styled.div`
  height: 90%;
  margin: 23px 45px 0px 45px;
  box-sizing: border-box;
  background-color: purple;
`;

const NewsTopBar = styled.div`
  height: 30%;
  width: 100%;
  background-color: khaki;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NewsTitle = styled.div`
  height: 100px;
  width: 800px;
  background-color: red;
  ${(props) => props.theme.putCenter}
  padding: 20px;
  box-sizing: border-box;
  span {
    font-size: 40px;
    color: black;
  }
`;

const NewsKeyword = styled.div`
  height: 100px;
  width: 200px;
  padding: 20px;
  box-sizing: border-box;
  background-color: yellow;
  ${(props) => props.theme.putCenter}
  span {
    font-size: 20px;
    color: black;
  }
`;

const NewsBottomBar = styled.div`
  height: 70%;
  width: 100%;
  background-color: indianred;
  display: flex;
`;

const NewsContentContainer = styled.div`
  width: 70%;
  background-color: green;
  position: relative;
  ${(props) => props.theme.putCenter}
`;

const NewsDescription = styled.div`
  width: 600px;
  height: 250px;
  background-color: chartreuse;
  padding: 20px;
  box-sizing: border-box;
  span {
    font-size: 30px;
    line-height: 1.3;
    color: black;
  }
`;

const NewsInfoContainer = styled.div`
  width: 30%;
  background-color: pink;
  position: relative;
  ${(props) => props.theme.putCenter}
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 75%;
  margin-top: 6%;
  background-color: blue;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const EditorAvatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
`;

const EditorName = styled.div`
  width: 200px;
  height: 40px;
  background-color: white;
`;

const NewsLinker = styled.div`
  width: 50px;
  height: 50px;
  margin: 20px;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
`;

const CommunicateContainer = styled.div`
  width: 100%;
  height: 19%;
  position: absolute;
  bottom: 0;
  background-color: purple;
  ${(props) => props.theme.putCenter};
`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default (props) => {
  let newsData = props.newsData;
  let keywordData = props.keywordData;
  let veryImportantKeywordData = keywordData.filter(
    (keyword) => keyword.importance === "very high"
  );
  let highKeywordData = keywordData.filter(
    (keyword) => keyword.importance === "high"
  );
  let middleKeywordData = keywordData.filter(
    (keyword) => keyword.importance === "middle"
  );
  let lowKeywordData = keywordData.filter(
    (keyword) => keyword.importance === "low"
  );

  let keywordDict = {};
  keywordDict["very important"] = veryImportantKeywordData;
  keywordDict["high"] = highKeywordData;
  keywordDict["middle"] = middleKeywordData;
  keywordDict["low"] = lowKeywordData;

  return (
    <>
      <MainContainer>
        <KeywordContainer>
          <KeywordBox>
            <KeywordTitle>
              {keywordDict.high.length !== 0 && keywordDict["high"][0].category}
            </KeywordTitle>
            <Keyword>
              {keywordDict.high.length !== 0 &&
                Object.keys(keywordDict).map((key, index) => (
                  <KeywordSet key={index}>
                    <KeywordKey>{key}</KeywordKey>

                    <KeywordValue>
                      {Object.values(keywordDict[key]).map((value, index) => (
                        <KeywordLink
                          key={index}
                          href={`?category=${keywordDict[key][0].category}&keyword=${value.keyword}`}
                        >
                          <span>{value.keyword}</span>
                        </KeywordLink>
                      ))}
                    </KeywordValue>
                  </KeywordSet>
                ))}
            </Keyword>
          </KeywordBox>
        </KeywordContainer>
        <NewsContainer>
          <NewsBox>
            <Swiper
              style={{ height: "100%" }}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              {newsData.map((news, index) => (
                <SwiperSlide key={index}>
                  <News>
                    <NewsTopBar>
                      <NewsTitle>
                        {parse(`
                          <span>${news.title}</span>
                          `)}
                      </NewsTitle>
                      <NewsKeyword>
                        <span>키워드 : {news.keyword}</span>
                      </NewsKeyword>
                    </NewsTopBar>
                    <NewsBottomBar>
                      <NewsContentContainer>
                        <NewsDescription>
                          {parse(`
                          <span>${news.description}</span>
                          `)}
                        </NewsDescription>
                        <a
                          href={news.original_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <NewsLinker />
                        </a>
                      </NewsContentContainer>
                      <NewsInfoContainer>
                        <EditorContainer>
                          <EditorAvatar />
                          <EditorName />
                        </EditorContainer>
                        <CommunicateContainer>
                          <button>좋아요</button>
                          <button>기사로 이동</button>
                        </CommunicateContainer>
                      </NewsInfoContainer>
                    </NewsBottomBar>
                  </News>
                </SwiperSlide>
              ))}
            </Swiper>
          </NewsBox>
        </NewsContainer>
      </MainContainer>
    </>
  );
};
