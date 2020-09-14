import React from "react";
import useAxios from "../useAxios";

export default () => {
  const { loading, error, data } = useAxios({
    url: "http://127.0.0.1:8000/keyword/",
    params: {
      category: "IT 과학",
      importance: "low",
    },
  });
  // console.log(
  //   `loading:${loading}\n error:${error}\n data:${JSON.stringify(data)}\n`
  // );
  // {
  //   console.log(document.cookie);
  // }
  return <h1>Main News</h1>;
};
