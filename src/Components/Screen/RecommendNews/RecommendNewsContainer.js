import React from "react";
import useAxios from "../useAxios";
import WarningSign from "./Presenter/PresentWarningSign";
import LoadingSign from "./Presenter/PresentLoading";
import RecommendNewsPresenter from "./Presenter/RecommendNewsPresenter";

const getCookie = (cookieName) => {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);

  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let c = cookieArray[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export default () => {
  const { loading, data } = useAxios({
    url: "http://127.0.0.1:8000/recommend/",
    method: "post",
    data: {
      user: getCookie("access"),
    },
  });
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
        <LoadingSign />
      </div>
    );
  } else if (loading === false && data === null) {
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
        <WarningSign />
      </div>
    );
  } else if (loading === false && data !== null) {
    return (
      <>
        <RecommendNewsPresenter data={data["data"]["data"]} />
      </>
    );
  }
};
