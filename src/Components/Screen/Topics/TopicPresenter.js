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
`;

const KeywordSet = styled.div`
  height: auto;
  width: 100%;
  background-color: gray;
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

const NewsPicContainer = styled.div`
  width: 30%;
  background-color: pink;
`;

const NewsContentContainer = styled.div`
  width: 70%;
  background-color: green;
  ${(props) => props.theme.putCenter}
`;

const NewsDescription = styled.div`
  width: 500px;
  height: 300px;
  background-color: chartreuse;
  padding: 20px;
  box-sizing: border-box;
  span {
    font-size: 30px;
    line-height: 1.3;
    color: black;
  }
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
            {keywordDict.high.length !== 0 &&
              Object.keys(keywordDict).map((key) => (
                <KeywordSet>
                  {key}

                  {Object.values(keywordDict[key]).map((value) => (
                    <p>{value.keyword}</p>
                  ))}
                </KeywordSet>
              ))}
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
                  <NewsLink href={news.original_link} target="_blank">
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
                        </NewsContentContainer>
                      </NewsBottomBar>
                    </News>
                  </NewsLink>
                </SwiperSlide>
              ))}
            </Swiper>
          </NewsBox>
        </NewsContainer>
      </MainContainer>
    </>
  );
};
