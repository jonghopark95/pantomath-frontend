import React, { useState, useEffect } from "react";
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
  }

  const [category, setCategory] = useState(currentCategory);

  const { loading, error, data, refetch } = useAxios({
    url: "http://127.0.0.1:8000/keyword/",
    params: {
      category: currentCategory,
      importance: "high",
    },
  });

  if (category !== currentCategory) {
    setCategory(currentCategory);
    refetch();
  }

  return (
    <TopicPresenter>
      {console.log(loading, currentCategory, category, error)}
      {console.log(JSON.stringify(data))}
    </TopicPresenter>
  );
};
