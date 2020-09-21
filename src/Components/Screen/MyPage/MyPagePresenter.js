import React from "react";
import styled from "styled-components";
import ReadNewsPresenter from "./Presenter/ReadNewsPresenter";
import RecommendNewsPresenter from "./Presenter/RecommendNewsPresenter";
import LikeNewsPresenter from "./Presenter/LikeNewsPresenter";
import EnterLinkNewsPresenter from "./Presenter/EnterLinkNewsPresenter";

const Div = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;

const DivUserName = styled.div`
  width: 100%;
  background-color: blue;
  font-size: 40px;
  span {
    color: purple;
  }
`;

const LeftSide = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
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
      <LeftSide>
        <RecommendNewsPresenter data={recommend_news} />
      </LeftSide>
      <RightSide>
        <DivUserName>
          <span>{username}</span> 님 안녕하세요!
        </DivUserName>
        <ReadNewsPresenter data={read_news} />
        <LikeNewsPresenter data={liked_news} />
        <EnterLinkNewsPresenter data={enter_link_news} />
      </RightSide>
    </Div>
  );
};
