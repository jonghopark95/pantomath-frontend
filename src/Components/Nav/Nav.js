import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 20%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Tab = styled.span`
  height: 100%;
  width: 60%;
  /* background-color: purple; */
  /* title: ${(props) => props.content}; */
  color: ${(props) => props.theme.normalFontColor};
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
  font-size: 27px;
`;

const TabImg = styled.div`
  height: 100%;
  width: 40%;
  ${(props) => props.theme.putCenter}
  svg {
    width: 2rem !important;
    height: 100%;
    color: ${(props) => props.theme.normalFontColor};
  }
`;

const TabContainer = styled.div`
  height: 7%;
  width: 100%;
  /* background-color: whitesmoke; */
  display: flex;
  :hover {
    cursor: pointer;
    ${Tab}, ${TabImg} {
      color: #1a67d2;
    }
  }
`;

const TabList = [
  { imgTag: <i class="fas fa-globe"></i>, title: "주요 뉴스" },
  { imgTag: <i class="far fa-user"></i>, title: "추천 뉴스" },
  { imgTag: <i class="fas fa-balance-scale"></i>, title: "정치" },
  { imgTag: <i class="fas fa-won-sign"></i>, title: "경제" },
  { imgTag: <i class="fas fa-users"></i>, title: "사회" },
  { imgTag: <i class="fas fa-theater-masks"></i>, title: "문화" },
  { imgTag: <i class="fas fa-flag-usa"></i>, title: "국제" },
  { imgTag: <i class="far fa-building"></i>, title: "지역" },
  { imgTag: <i class="fas fa-running"></i>, title: "스포츠" },
  { imgTag: <i class="fas fa-atom"></i>, title: "IT 과학" },
];

export default () => (
  <Nav>
    {TabList.map((tab) => (
      <TabContainer>
        <TabImg>{tab.imgTag}</TabImg>
        <Tab>{tab.title}</Tab>
      </TabContainer>
    ))}
  </Nav>
);
