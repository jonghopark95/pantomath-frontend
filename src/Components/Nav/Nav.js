import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 20%;
  height: 90vh;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TabContainer = styled.div`
  height: 7%;
  width: 100%;
  background-color: whitesmoke;
  display: flex;
`;

const Tab = styled.span`
  height:100%;
  width:70%;
  background-color:purple;
  /* title: ${(props) => props.content}; */
  color:#8f9797;
  display:flex;
  justify-content:left;
  align-items:center;
  padding-left:20px;
`;

const TabImg = styled.div`
  height: 100%;
  width: 30%;
  background-color: blueviolet;
`;

const TabList = [
  { imgpath: " ", title: "주요 뉴스" },
  { imgpath: " ", title: "추천 뉴스" },
  { imgpath: " ", title: "정치" },
  { imgpath: " ", title: "경제" },
  { imgpath: " ", title: "사회" },
  { imgpath: " ", title: "문화" },
  { imgpath: " ", title: "국제" },
  { imgpath: " ", title: "지역" },
  { imgpath: " ", title: "스포츠" },
  { imgpath: " ", title: "IT 과학" },
];

export default () => (
  <Nav>
    {TabList.map((tab) => (
      <TabContainer>
        <TabImg />
        <Tab>{tab.title}</Tab>
      </TabContainer>
    ))}
  </Nav>
);
