import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import LoginForm from "./LoginForm";

const TopBar = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  background-color: lavender;
  justify-content: space-around;
`;

const LogoForm = styled.div`
  height: 100%;
  width: 365px;
  font-size: 50px;

  ${(props) => props.theme.putCenter};
  span {
    font-family: "Dancing Script", cursive;
  }
`;

const LoginButton = styled.div`
  height: 100%;
  width: 150px;
  font-size: 20px;
  ${(props) => props.theme.putCenter};
`;

const activateLoginForm = () => {
  // 버튼 누를 시
  // 해당 폼이 활성화되어있는지 아닌지 체크하고
  // 활성화 되어 있다면 창을 닫음, 안되 있으면 활성화 시킴
  let currentDOM = document.getElementById("login_form");
  currentDOM.classList.toggle("activate");
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

export default () => {
  return (
    <TopBar>
      <LogoForm>
        <span>Pantomath</span>
      </LogoForm>
      <Nav />
      <LoginButton onClick={activateLoginForm}>
        {/* {document.cookie === "" ? (
          <button>
            <span>로그아웃</span>
          </button>
        ) : (
          <button>
            <span>로그인</span>
          </button>
        )} */}
        {getCookie("access") === "" ? (
          <button>
            <span>로그인</span>
          </button>
        ) : (
          <button
            onClick={() => {
              let date = new Date();
              date.setDate(date.getDate() - 1);
              document.cookie = `access=; expires=${date.toUTCString()}; path=/;`;
              document.cookie = `access=; expires=${date.toUTCString()}; path=/topics;`;
              document.cookie = `likednewslist=; expires=${date.toUTCString()}; path=/;`;
              document.cookie = `likednewslist=; expires=${date.toUTCString()}; path=/topics;`;
              window.location.reload();
            }}
          >
            <span>로그아웃</span>
          </button>
        )}
      </LoginButton>
      <LoginForm />
    </TopBar>
  );
};
