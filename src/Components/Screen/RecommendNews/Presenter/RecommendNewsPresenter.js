import React, { useState } from "react";
import styled from "styled-components";
import SwiperCore, {
  Navigation,
  Mousewheel,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import parse from "html-react-parser";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const News = styled.div`
  margin: 0px 20px 0px 20px;
  box-sizing: border-box;
  /* background-color: purple; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
`;

const NewsTopBar = styled.div`
  width: 100%;
  /* background-color: khaki; */
`;

const NewsTitle = styled.div`
  height: auto;
  width: 100%;
  /* background-color: red; */
  /* ${(props) => props.theme.putCenter} */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  span {
    font-size: 40px;
    font-weight: 600;
    color: black;
  }
`;

const NewsLink = styled.div`
  width: 70%;
  height: auto;
  padding-left: 20px;
  span {
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  display: inline-block;
`;

const UserRespond = styled.div`
  width: 30%;
  height: auto;
  padding-right: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    padding-right: 20px;
  }
  span:hover {
    color: #7f8fa6;
  }
`;

const Hr = styled.hr`
  all: unset;
  /* border-top: 1px solid #dcdde1; */
  border-top: 1px solid #7f8fa6;
  margin: 1.5rem;
`;

const LinkToNews = styled.a`
  text-decoration: none;
  color: #353b48;
  display: flex;
  align-items: center;

  &:hover {
    color: #7f8fa6;
    text-decoration: none;
  }
`;

const KeywordLink = styled.a`
  /* all: unset; */
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
  cursor: pointer;
  span {
    color: #353b48;
  }
  span:hover {
    /* all: unset; */
    color: #7f8fa6;
  }
`;

const ThumbDiv = styled.div`
  all: unset;
  svg {
    color: #353b48;
  }
  svg:hover {
    color: #7f8fa6;
  }
`;

const NewsContentContainer = styled.div`
  width: 100%;
  /* background-color: green; */
  position: relative;
  ${(props) => props.theme.putCenter}
`;

const NewsDescription = styled.div`
  width: 100%;
  /* background-color: chartreuse; */
  padding: 20px;
  box-sizing: border-box;
  span {
    font-size: 25px;
    line-height: 1.6;
    color: black;
  }
`;

export default (props) => {
  console.log(props.data);

  const requestLike = async (e, id) => {
    e.preventDefault();
    try {
      const sendLikeApi = axios.post("/like/", {
        user: getCookie("access"),
        newsId: id,
      });
      const userLikedNewsList = await sendLikeApi;

      let storeData = userLikedNewsList["data"]["data"].toString();
      document.cookie = `likednewslist=${storeData}`;
      setNewsListCookie(storeData);
    } catch {
      console.log("error");
    }
  };

  const getCurrentCategory = () => {
    let splitedUrl = window.location.href.split("/");

    let currentCategory = "";

    switch (splitedUrl[4]) {
      case "politics":
        currentCategory = "정치";
        break;
      case "economy":
        currentCategory = "경제";
        break;
      case "society":
        currentCategory = "사회";
        break;
      case "culture":
        currentCategory = "문화";
        break;
      case "international":
        currentCategory = "국제";
        break;
      case "district":
        currentCategory = "지역";
        break;
      case "sports":
        currentCategory = "스포츠";
        break;
      case "it-science":
        currentCategory = "IT 과학";
        break;
      default:
        currentCategory = "idunno";
    }
    return currentCategory;
  };

  const requestToLink = async (e, id) => {
    // e.preventDefault();
    // console.log(id);
    try {
      axios.post("/link/", {
        user: getCookie("access"),
        newsId: id,
      });
    } catch {
      console.log("error");
    }
  };

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

  const [newsListCookie, setNewsListCookie] = useState(
    getCookie("likednewslist")
  );

  return (
    <div
      style={{
        height: "100%",
        flexDirection: "column",
        marginTop: "80px",
        overflow: "scroll",
        padding: "7px 300px",
      }}
    >
      {props.data.map((data, index) => (
        <News style={{ marginBottom: "60px" }} key={index}>
          <NewsTopBar>
            <NewsTitle>
              {data &&
                parse(`
                <span>${data.fields.title}</span>
                `)}
            </NewsTitle>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NewsLink>
                <LinkToNews
                  href={data && data.fields.original_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    requestToLink(e, data.id);
                    console.log("ehehe");
                  }}
                >
                  <i
                    class="fas fa-link"
                    style={{
                      fontSize: "19px",
                      color: "#353b48",
                      paddingRight: "7px",
                    }}
                  ></i>
                  <span>{data && data.fields.original_link}</span>
                </LinkToNews>
              </NewsLink>
              <UserRespond>
                <KeywordLink
                  href={
                    data !== undefined &&
                    `?category=${getCurrentCategory()}&keyword=${data.keyword}`
                  }
                >
                  <span>{data && data.fields.keyword}</span>
                </KeywordLink>

                <button
                  onClick={(e) => {
                    requestLike(e, data.id);
                  }}
                  style={{ all: "unset", cursor: "pointer" }}
                >
                  {/* {console.log(newsListCookie)} */}

                  <ThumbDiv>
                    {newsListCookie.includes(data && data.fields.id) ? (
                      <i class="fas fa-thumbs-up"></i>
                    ) : (
                      <i class="far fa-thumbs-up"></i>
                    )}
                  </ThumbDiv>
                </button>
                <p className="fake_data" style={{ display: "none" }}>
                  {data && data.id}
                </p>
              </UserRespond>
            </div>
          </NewsTopBar>
          <Hr />
          <NewsContentContainer>
            <NewsDescription>
              {parse(`
                <span>${data && data.fields.description}</span>
                `)}
            </NewsDescription>
          </NewsContentContainer>
        </News>
      ))}
    </div>
  );
};
