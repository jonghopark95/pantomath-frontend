import React from "react";
import styled from "styled-components";
import ReadNewsPresenter from "./Presenter/ReadNewsPresenter";
import RecommendNewsPresenter from "./Presenter/RecommendNewsPresenter";

const Div = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivUserName = styled.div`
  width: 50%;
  background-color: blue;
  font-size: 40px;
  span {
    color: purple;
  }
`;

export default (props) => {
  const username = props.data.username;
  const read_news = JSON.parse(props.data.read_news);
  const liked_news = JSON.parse(props.data.liked_news);
  const enter_link_news = JSON.parse(props.data.enter_link_news);
  const recommend_news = JSON.parse(props.data.recommend_news);
  //   console.log(username, read_news, liked_news, enter_link_news, recommend_news);
  //   console.log(read_news);
  return (
    <Div>
      <DivUserName>
        <span>{username}</span> 님 안녕하세요!
      </DivUserName>
      <RecommendNewsPresenter data={recommend_news} />
      <ReadNewsPresenter data={read_news} />
      <h1>dfdf</h1>
      <h1>dfdf</h1>
      <h1>dfdf</h1>
    </Div>
  );
};
