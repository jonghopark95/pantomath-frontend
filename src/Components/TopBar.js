import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import LoginForm from "./LoginForm";

const TopBar = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
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
    // <TopBar>
    //   <LogoForm>
    //     <span>Pantomath</span>
    //   </LogoForm>
    //   <Nav />
    //   <LoginButton onClick={activateLoginForm}>
    //     {getCookie("access") === "" ? (
    //       <button>
    //         <span>로그인</span>
    //       </button>
    //     ) : (
    //       <button
    //         onClick={() => {
    //           let date = new Date();
    //           date.setDate(date.getDate() - 1);
    //           document.cookie = `access=; expires=${date.toUTCString()}; path=/;`;
    //           document.cookie = `access=; expires=${date.toUTCString()}; path=/topics;`;
    //           document.cookie = `likednewslist=; expires=${date.toUTCString()}; path=/;`;
    //           document.cookie = `likednewslist=; expires=${date.toUTCString()}; path=/topics;`;
    //           window.location.reload();
    //         }}
    //       >
    //         <span>로그아웃</span>
    //       </button>
    //     )}
    //   </LoginButton>

    // </TopBar>
    <nav
      class="navbar navbar-expand navbar-dark"
      style={{ backgroundColor: "#353b48" }}
    >
      <a class="navbar-brand" href="/">
        <span style={{ fontFamily: "Cedarville Cursive", fontSize: "21px" }}>
          pantomath
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample06"
        aria-controls="navbarsExample06"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample06">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              메인 메뉴 <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              추천 뉴스
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown06"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              카테고리
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdown06">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <button
          class="form-inline my-2 my-md-0"
          style={{
            all: "unset",
            backgroundColor: "#343A40",
            borderColor: "#343A40",
            cursor: "pointer",
          }}
          onClick={activateLoginForm}
        >
          {getCookie("access") === "" ? (
            <span class="nav-item" style={{ color: "white", fontSize: "15px" }}>
              로그인
            </span>
          ) : (
            <div
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
              <span style={{ color: "white" }}>로그아웃</span>
            </div>
          )}
        </button>
        <LoginForm />
      </div>
    </nav>
  );
};
