import React from "react";
import useAxios from "../useAxios";
import LoadingSign from "../RecommendNews/Presenter/PresentLoading";
import MyPagePresenter from "./MyPagePresenter";

export default () => {
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

  const { loading, data } = useAxios({
    method: "post",
    url: "http://127.0.0.1:8000/mypage/",
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
  } else {
    return data && <MyPagePresenter data={data.data} />;
  }
};
