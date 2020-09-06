import React, { useState } from "react";
import useAxios from "../useAxios";
import TopicPresenter from "./TopicPresenter";

export default (props) => {
  let currentCategory = props.category;

  switch (currentCategory) {
    case "politics":
      currentCategory = "정치";
      break;
    case "economy":
      currentCategory = "경제";
      break;
    case "society":
      currentCategory = "사회";
      break;
    case "culture":
      currentCategory = "문화";
      break;
    case "international":
      currentCategory = "국제";
      break;
    case "district":
      currentCategory = "지역";
      break;
    case "sports":
      currentCategory = "스포츠";
      break;
    case "it-science":
      currentCategory = "IT 과학";
      break;
    default:
      console.log("error ");
  }

  // 키워드와 뉴스 데이터를 우선 호출한다.
  const {
    loading: keywordDataLoading,
    error: keywordError,
    data: keywordData,
    refetch: keywordRefetch,
  } = useAxios({
    url: "http://127.0.0.1:8000/keyword/",
    params: {
      category: currentCategory,
    },
  });

  const {
    loading: newsDataLoading,
    error,
    data: newsData,
    refetch: newsRefetch,
  } = useAxios({
    url: "http://127.0.0.1:8000/news/",
    params: {
      category: currentCategory,
    },
  });

  const [category, setCategory] = useState(currentCategory);
  // 카테고리가 달라질 경우 api 를 새로 호출한다.
  if (category !== currentCategory) {
    setCategory(currentCategory);
    keywordRefetch();
    newsRefetch();
  }

  // 첫 화면에선 very high 순으로 뉴스를 10개 출력해준다.
  // 만약 Very high keyword가 10개 이하일 경우 해당 키워드를 순회하며 10개 기사를 호출
  // 10개 이상이면 키워드당 한 기사를 호출한다.
  let veryHighKeywordData = [];
  let newsDataToShow = [];
  if (!keywordDataLoading) {
    veryHighKeywordData = keywordData.data.filter(
      (keyword) => keyword.importance === "very high"
    );

    if (veryHighKeywordData.length < 10) {
      for (let count = 0; count < 10 / veryHighKeywordData.length; count++) {
        if (!newsDataLoading) {
          veryHighKeywordData.forEach((data) => {
            newsDataToShow.push(
              newsData.data.filter((news) => news.keyword === data.keyword)[
                count
              ]
            );
          });
        }
      }
    } else {
      if (!newsDataLoading) {
        veryHighKeywordData.forEach((data) => {
          newsDataToShow.push(
            newsData.data.filter((news) => news.keyword === data.keyword)[0]
          );
        });
      }
    }
  }

  return <TopicPresenter newsData={newsDataToShow}></TopicPresenter>;
};
