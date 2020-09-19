import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 1080px;
  height: 70px;
  display: flex;
  justify-content: flex-end;
`;

const Tab = styled.span`
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.normalFontColor};
  display: flex;
  justify-content: left;
  align-items: center;
`;

const TabLink = styled(Link)`
  text-decoration: none;
  :hover,
  &.selected {
    cursor: pointer;
    ${Tab} > svg {
      color: #1a67d2;
    }
  }
  &.selected {
    background-color: #e2edfd;
  }
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

const currentLoc = () => {
  let currentByEng = window.location.href.split("?")[0].split("/")[4];
  let currentByKor = "";

  switch (currentByEng) {
    case "politics":
      currentByKor = "정치";
      break;
    case "economy":
      currentByKor = "경제";
      break;
    case "society":
      currentByKor = "사회";
      break;
    case "culture":
      currentByKor = "문화";
      break;
    case "international":
      currentByKor = "국제";
      break;
    case "district":
      currentByKor = "지역";
      break;
    case "sports":
      currentByKor = "스포츠";
      break;
    case "it-science":
      currentByKor = "IT 과학";
      break;
    default:
      currentByKor = "idunno";
  }

  if (currentByKor === "idunno") {
    currentByEng = window.location.href.split("?")[0].split("/")[3];
    if (currentByEng === "recommend") currentByKor = "추천 뉴스";
    else if (currentByEng === "") currentByKor = "주요 뉴스";
  }
  return currentByKor;
};

export default (props) => {
  const [current, setCurrent] = useState();

  return (
    <ul class="navbar-nav mr-auto">
      {TabList.map((tab) => (
        <li class="nav-item">
          <TabLink
            to={tab.link}
            key={tab.title}
            onClick={(e) => {
              setCurrent(e.target.parentNode.innerText);
            }}
            className={
              tab.title === currentLoc() ? "nav-link active" : "nav-link"
            }
          >
            <Tab>{tab.title}</Tab>
          </TabLink>
        </li>
      ))}
    </ul>
  );
};
