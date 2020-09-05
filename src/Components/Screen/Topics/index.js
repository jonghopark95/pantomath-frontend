import React from "react";
import TopicContainer from "./TopicContainer";

export default () => {
  const category = window.location.pathname.split("/")[2];
  return <TopicContainer category={category}></TopicContainer>;
};
