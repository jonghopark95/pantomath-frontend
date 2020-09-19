import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const News = styled.div`
  margin: 0px 20px 0px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
`;

const NewsTopBar = styled.div`
  width: 100%;
`;

const NewsTitle = styled.div`
  height: auto;
  width: 100%;

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
`;

const Hr = styled.hr`
  all: unset;

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

const NewsContentContainer = styled.div`
  width: 100%;

  position: relative;
  ${(props) => props.theme.putCenter}
`;

const NewsDescription = styled.div`
  width: 100%;

  padding: 20px;
  box-sizing: border-box;
  span {
    font-size: 25px;
    line-height: 1.6;
    color: black;
  }
`;

export default (props) => {
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
                <span>{data && data.fields.keyword}</span>

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
