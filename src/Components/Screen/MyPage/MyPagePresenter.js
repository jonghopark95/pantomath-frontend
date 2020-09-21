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
  overflow-y: scroll;
`;

const DivUserName = styled.div`
  width: 100%;
  /* background-color: blue; */
  font-size: 30px;
  span {
    font-size: 35px;
    font-weight: bold;
  }
  margin-bottom: 100px;
`;

const LeftSide = styled.div`
  width: 20%;
  height: 100%;
  margin-top: 200px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 20px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
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
        <DivUserName>
          <p>
            <span>{username}</span> 님
          </p>{" "}
          안녕하세요!
        </DivUserName>
        <RecommendNewsPresenter data={recommend_news} />
      </LeftSide>
      <RightSide>
        <ReadNewsPresenter data={read_news} />
        <div style={{ marginBottom: "50px" }} />
        <LikeNewsPresenter data={liked_news} />
        <div style={{ marginBottom: "50px" }} />
        <EnterLinkNewsPresenter data={enter_link_news} />
      </RightSide>
    </Div>
  );
};
