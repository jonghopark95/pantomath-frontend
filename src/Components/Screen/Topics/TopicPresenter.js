import React from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

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

const News = styled.div`
  height: 100%;
  height: 90%;
  margin: 23px 45px 0px 45px;
  box-sizing: border-box;
  background-color: purple;
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
                  <News>
                    {news.title}
                    {news.keyword}
                    {news.description}
                    {news.original_link}
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
