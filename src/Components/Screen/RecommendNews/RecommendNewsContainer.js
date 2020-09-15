import React from "react";
import useAxios from "../useAxios";

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
  console.log(loading, data);
  return (
    <>
      <h1>haha</h1>
      <h2>hoho</h2>
    </>
  );
};
