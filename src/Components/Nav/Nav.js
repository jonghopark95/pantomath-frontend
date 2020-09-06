import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const TabLink = styled(Link)`
  height: 7%;
  width: 100%;
  display: flex;
  text-decoration: none;
  :hover,
  &.selected {
    cursor: pointer;
    ${Tab}, ${TabImg} > svg {
      color: #1a67d2;
    }
  }
  &.selected {
    background-color: #e2edfd;
  }
  /* transition: all 0.5s linear; */
`;

const TabList = [
  { link: "/", imgTag: <i className="fas fa-globe"></i>, title: "주요 뉴스" },
  {
    link: "/recommend",
    imgTag: <i className="far fa-user"></i>,
    title: "추천 뉴스",
  },
  {
    link: "/topics/politics",
    imgTag: <i className="fas fa-balance-scale"></i>,
    title: "정치",
  },
  {
    link: "/topics/economy",
    imgTag: <i className="fas fa-won-sign"></i>,
    title: "경제",
  },
  {
    link: "/topics/society",
    imgTag: <i className="fas fa-users"></i>,
    title: "사회",
  },
  {
    link: "/topics/culture",
    imgTag: <i className="fas fa-theater-masks"></i>,
    title: "문화",
  },
  {
    link: "/topics/international",
    imgTag: <i className="fas fa-flag-usa"></i>,
    title: "국제",
  },
  {
    link: "/topics/district",
    imgTag: <i className="far fa-building"></i>,
    title: "지역",
  },
  {
    link: "/topics/sports",
    imgTag: <i className="fas fa-running"></i>,
    title: "스포츠",
  },
  {
    link: "/topics/it-science",
    imgTag: <i className="fas fa-atom"></i>,
    title: "IT 과학",
  },
];

export default (props) => {
  const [current, setCurrent] = useState();

  useEffect(
    () => document.getElementsByTagName("a")[0].classList.add("selected"),
    []
  );

  return (
    <Nav>
      {TabList.map((tab) => (
        <TabLink
          to={tab.link}
          key={tab.title}
          onClick={(e) => {
            props.setCategory(e.target.parentNode.innerText);
            setCurrent(e.target.parentNode.innerText);
          }}
          className={tab.title === current ? "selected" : null}
        >
          {/* <TabImg>{tab.imgTag}</TabImg> */}
          <Tab>{tab.title}</Tab>
        </TabLink>
      ))}
    </Nav>
  );
};
