import React from "react";
import LoadingSign from "../RecommendNews/Presenter/PresentLoading";
import useAxios from "../useAxios";

import KeywordPresenter from "./Presenter/KeywordPresenter";
import NewsPresenter from "./Presenter/NewsPresenter";
import WarningPresenter from "./Presenter/WarningPresenter";

export default () => {
  // API 요청
  const { loading, data } = useAxios({
    url: "http://127.0.0.1:8000/keyword/",
    method: "GET",
    params: {
      importance: "very high",
    },
  });

  let decodedURI = decodeURI(decodeURIComponent(window.location.search));
  let axiosOption = {
    url: "http://127.0.0.1:8000/news/",
  };
  if (decodedURI !== "") {
    let paramArray = decodedURI.slice(1).split("&");
    let categoryValue = paramArray[0].replace("category=", "");
    let keywordValue = paramArray[1].replace("keyword=", "");
    let params = {
      category: categoryValue,
      keyword: keywordValue,
    };
    axiosOption["params"] = params;
  } else {
    axiosOption["params"] = "";
  }

  const {
    loading: newsLoading,
    data: newsData,
    //   refetch: newsRefetch,
  } = useAxios(axiosOption);

  // 로딩 중일 경우 로딩 사인 출력
  if (loading === true) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <LoadingSign /> */}
      </div>
    );
  }
  // 로딩이 끝났을 경우 데이터를 정렬한다.
  if (loading !== true) {
    let resData = data.data;
    const politicsKw = resData.filter((data) => data.category === "정치");
    const economicKw = resData.filter((data) => data.category === "경제");
    const societyKw = resData.filter((data) => data.category === "사회");
    const cultureKw = resData.filter((data) => data.category === "문화");
    const internationalKw = resData.filter((data) => data.category === "국제");
    const districtKw = resData.filter((data) => data.category === "지역");
    const sportsKw = resData.filter((data) => data.category === "스포츠");
    const itKw = resData.filter((data) => data.category === "IT 과학");

    const keywordContainer = {};
    keywordContainer["정치"] = politicsKw;
    keywordContainer["경제"] = economicKw;
    keywordContainer["사회"] = societyKw;
    keywordContainer["문화"] = cultureKw;
    keywordContainer["국제"] = internationalKw;
    keywordContainer["지역"] = districtKw;
    keywordContainer["스포츠"] = sportsKw;
    keywordContainer["IT 과학"] = itKw;

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "scroll",
        }}
      >
        <KeywordPresenter data={keywordContainer} />
        {newsLoading === true && <LoadingSign />}
        {newsLoading === false && newsData.data.length !== 10 && (
          <WarningPresenter />
        )}
        {newsLoading === false && newsData.data.length === 10 && (
          <NewsPresenter data={newsData} />
        )}
      </div>
    );
  }
};
