import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import LoginForm from "./LoginForm";

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
    <nav
      class="navbar navbar-expand navbar-dark"
      style={{
        backgroundColor: "#353b48",
        padding: "7px 300px",
        position: "absolute",
        width: "100%",
      }}
    >
      <Link to="/" class="navbar-brand">
        <span style={{ fontFamily: "Cedarville Cursive", fontSize: "21px" }}>
          pantomath
        </span>
      </Link>
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
        <Nav />
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
