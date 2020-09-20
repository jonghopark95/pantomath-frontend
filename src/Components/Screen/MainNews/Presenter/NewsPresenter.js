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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const NewsContainer = styled.div`
  width: 50%;
  height: 100%;
  /* ${(props) => props.theme.putCenter} */
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

const CategoryDiv = styled.div`
  padding: 10px 0px 0px 40px;
  height: 5%;
  width: 50%;
  span {
    font-size: 20px;
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

const swiperParams = {
  mousewheel: true,
  direction: "vertical",
  autoHeight: true,
  speed: 1000,
};

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

const ThumbDiv = styled.div`
  all: unset;
  svg {
    color: #353b48;
  }
  svg:hover {
    color: #7f8fa6;
  }
`;

const Hr = styled.hr`
  all: unset;
  /* border-top: 1px solid #dcdde1; */
  border-top: 1px solid #7f8fa6;
  margin: 1.5rem;
`;

export default (props) => {
  let newsData = props.data.data;

  console.log(newsData);

  const [newsListCookie, setNewsListCookie] = useState(
    getCookie("likednewslist")
  );

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

  //   console.log(data);
  return (
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
                          class="fas fa-link"
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
                        href={news !== undefined && `?keyword=${news.keyword}`}
                      >
                        <span>{news && news.keyword}</span>
                      </KeywordLink>

                      <button
                        onClick={(e) => {
                          requestLike(e, news.id);
                        }}
                        style={{ all: "unset", cursor: "pointer" }}
                      >
                        {/* {console.log(newsListCookie)} */}

                        <ThumbDiv>
                          {newsListCookie.includes(news && news.id) ? (
                            <i class="fas fa-thumbs-up"></i>
                          ) : (
                            <i class="far fa-thumbs-up"></i>
                          )}
                        </ThumbDiv>
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
  );
};
