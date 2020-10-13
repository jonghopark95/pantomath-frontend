//https://flatuicolors.com/palette/gb
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

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  /* margin: 0px 0px 0px 300px; */
  overflow: scroll;
  ${(props) => props.theme.putCenter}
`;

const KeywordContainer = styled.div`
  width: 20%;
  height: 100%;
  margin-top: 150px;

  /* display: flex;
  align-items: center; */
`;

const NewsContainer = styled.div`
  width: 50%;
  height: 100%;
  /* ${(props) => props.theme.putCenter} */
`;

const KeywordBox = styled.div`
  /* height: 600px; */
  width: 300px;
  padding: 30px;
  box-sizing: content-box;
  /* background-color: lavender; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Keyword = styled.div`
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const KeywordSet = styled.div`
  margin-bottom: 30px;
`;

const KeywordKey = styled.div`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const KeywordValue = styled.div`
  width: 100%;
  height: auto;
  padding: 15px 5px;
  box-sizing: border-box;
  /* background-color: khaki; */
  display: grid;
  row-gap: 10px;
  grid-template-columns: 33.3% 33.3% 33.3%;
  a {
    place-self: center;
    span {
      font-size: 12px;
    }
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

const NewsBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

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

const ThumbDiv = styled.div`
  all: unset;
  display: none;
  svg {
    color: #353b48;
  }
  svg:hover {
    color: #7f8fa6;
  }
  &.activate {
    display: block;
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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

export default (props) => {
  const [thumb, setThumb] = useState(0);

  const thumbSelector = (newsId) => {
    if (newsId) {
      return setThumb(newsListCookie.includes(newsId));
    }
  };

  let newsData = props.newsData;
  let keywordData = props.keywordData;
  let veryImportantKeywordData = keywordData.filter(
    (keyword) => keyword.importance === "very high"
  );
  let highKeywordData = keywordData.filter(
    (keyword) => keyword.importance === "high"
  );
  let middleKeywordData = keywordData.filter(
    (keyword) => keyword.importance === "middle"
  );
  let lowKeywordData = keywordData.filter(
    (keyword) => keyword.importance === "low"
  );

  let keywordDict = {};
  keywordDict["very important"] = veryImportantKeywordData;
  keywordDict["high"] = highKeywordData;
  keywordDict["middle"] = middleKeywordData;
  keywordDict["low"] = lowKeywordData;

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

  const requestToRead = async (e, id) => {
    // e.preventDefault();
    // console.log(id);
    try {
      axios.post("/read/", {
        user: getCookie("access"),
        newsId: id,
      });
    } catch {
      console.log("error");
    }
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

  const [newsListCookie, setNewsListCookie] = useState(
    getCookie("likednewslist")
  );

  // const [currentNewsId, setCurrentNewsId] = useState(0);
  // useEffect(() => console.log(currentNewsId), [currentNewsId]);

  const swiperParams = {
    mousewheel: true,
    direction: "vertical",
    autoHeight: true,
    speed: 1000,
  };

  const CategoryDiv = styled.div`
    padding: 10px 0px 0px 40px;
    height: 5%;
    width: 50%;
    span {
      font-size: 20px;
    }
  `;

  const KeywordTitle = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const giveStarByImportance = (str) => {
    if (str === "very important") {
      return (
        <>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </>
      );
    } else if (str === "high") {
      return (
        <>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </>
      );
    } else if (str === "middle") {
      return (
        <>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </>
      );
    } else if (str === "low") {
      return (
        <>
          <i className="far fa-star"></i>
        </>
      );
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

  return (
    <>
      <MainContainer>
        <KeywordContainer>
          <KeywordBox>
            <KeywordTitle style={{ marginBottom: "20px" }}>
              <span
                style={{
                  marginRight: "20px",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "#2f3640",
                }}
              >
                {keywordDict.high.length !== 0 &&
                  keywordDict["high"][0].category}
              </span>
            </KeywordTitle>
            <KeywordTitle style={{ marginBottom: "60px" }}>
              <span
                style={{
                  marginLeft: "5px",
                  fontSize: "20px",
                  color: "#353b48",
                }}
              >
                {window.location.href.split("&").length !== 1 &&
                  decodeURIComponent(
                    window.location.href.split("&")[1]
                  ).replace("keyword=", "")}
              </span>
            </KeywordTitle>

            <Keyword>
              {keywordDict.high.length !== 0 &&
                Object.keys(keywordDict).map((key, index) => (
                  <>
                    <KeywordSet key={index}>
                      <KeywordKey>
                        <span style={{ fontSize: "10px" }}>
                          {giveStarByImportance(key)}
                        </span>
                      </KeywordKey>

                      <KeywordValue>
                        {Object.values(keywordDict[key]).map((value, index) => (
                          <KeywordLink
                            key={index}
                            href={`?category=${keywordDict[key][0].category}&keyword=${value.keyword}`}
                          >
                            <span id="keyword-data">{value.keyword}</span>
                          </KeywordLink>
                        ))}
                      </KeywordValue>
                    </KeywordSet>
                  </>
                ))}
            </Keyword>
          </KeywordBox>
        </KeywordContainer>
        <NewsContainer>
          <CategoryDiv>{/* <span>{getCurrentCategory()}</span> */}</CategoryDiv>
          <NewsBox>
            <Swiper
              {...swiperParams}
              style={{ width: "100%", height: "100%", marginTop: "50px" }}
              slidesPerView={2}
              pagination={{ clickable: true, color: "black" }}
              // onSwiper={(swiper) => console.log(swiper)}
              // navigation
              touchStartForcePreventDefault={true}
              onSlideChange={(e) => {
                document.querySelector(".swiper-slide-active") !== null &&
                  requestToRead(
                    e,
                    document
                      .querySelector(".swiper-slide-active")
                      .querySelector(".fake_data").innerHTML
                  );
                // console.log(e.target);
              }}
            >
              {newsData.map((news, index) => (
                <SwiperSlide key={index}>
                  <News>
                    <NewsTopBar>
                      <NewsTitle>
                        {news &&
                          parse(`
                          <span>${news.title}</span>
                          `)}
                      </NewsTitle>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <NewsLink>
                          <LinkToNews
                            href={news && news.original_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              requestToLink(e, news.id);
                              console.log("ehehe");
                            }}
                          >
                            <i
                              className="fas fa-link"
                              style={{
                                fontSize: "19px",
                                color: "#353b48",
                                paddingRight: "7px",
                              }}
                            ></i>
                            <span>{news && news.original_link}</span>
                          </LinkToNews>
                        </NewsLink>
                        <UserRespond>
                          <KeywordLink
                            href={
                              news !== undefined &&
                              `?category=${getCurrentCategory()}&keyword=${
                                news.keyword
                              }`
                            }
                          >
                            <span>{news && news.keyword}</span>
                          </KeywordLink>

                          <button
                            onClick={(e) => {
                              requestLike(e, news.id);
                              document
                                .getElementById(`${news.id}_whiteThumb`)
                                .classList.toggle("activate");

                              document
                                .getElementById(`${news.id}_blackThumb`)
                                .classList.toggle("activate");
                            }}
                            style={{ all: "unset", cursor: "pointer" }}
                          >
                            {newsListCookie.includes(news && news.id) ? (
                              <>
                                <ThumbDiv id={`${news.id}_whiteThumb`}>
                                  <i className="far fa-thumbs-up"></i>
                                </ThumbDiv>

                                <ThumbDiv
                                  id={`${news.id}_blackThumb`}
                                  className="activate"
                                >
                                  <i className="fas fa-thumbs-up"></i>
                                </ThumbDiv>
                              </>
                            ) : (
                              <>
                                <ThumbDiv
                                  id={`${news.id}_whiteThumb`}
                                  className="activate"
                                >
                                  <i className="far fa-thumbs-up"></i>
                                </ThumbDiv>

                                <ThumbDiv id={`${news.id}_blackThumb`}>
                                  <i className="fas fa-thumbs-up"></i>
                                </ThumbDiv>
                              </>
                            )}
                          </button>
                          <p className="fake_data" style={{ display: "none" }}>
                            {news && news.id}
                          </p>
                        </UserRespond>
                      </div>
                    </NewsTopBar>
                    <Hr />
                    <NewsContentContainer>
                      <NewsDescription>
                        {parse(`
                          <span>${news && news.description}</span>
                          `)}
                      </NewsDescription>
                    </NewsContentContainer>
                  </News>
                </SwiperSlide>
              ))}
            </Swiper>
          </NewsBox>
        </NewsContainer>
      </MainContainer>
    </>
  );
};
