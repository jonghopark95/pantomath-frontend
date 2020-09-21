import React from "react";
import { useHistory } from "react-router-dom";
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
  let history = useHistory();
  return (
    <nav
      className="navbar navbar-expand navbar-dark"
      style={{
        backgroundColor: "#353b48",
        padding: "7px 300px",
        position: "absolute",
        width: "100%",
      }}
    >
      <a href="/" className="navbar-brand">
        <span style={{ fontFamily: "Cedarville Cursive", fontSize: "21px" }}>
          pantomath
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample06"
        aria-controls="navbarsExample06"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample06">
        <Nav />
        <button
          className="form-inline my-2 my-md-0"
          style={{
            all: "unset",
            backgroundColor: "#343A40",
            borderColor: "#343A40",
            cursor: "pointer",
          }}
        >
          {getCookie("access") === "" ? (
            <span
              className="nav-item"
              style={{ color: "white", fontSize: "15px" }}
              onClick={activateLoginForm}
            >
              로그인
            </span>
          ) : (
            <div style={{ display: "flex" }}>
              <div>
                <a href="/mypage" style={{ all: "unset" }}>
                  <span style={{ color: "white", marginRight: "30px" }}>
                    마이 페이지
                  </span>
                </a>
              </div>
              <div
                onClick={() => {
                  let date = new Date();
                  date.setDate(date.getDate() - 1);
                  document.cookie = `access=; expires=${date.toUTCString()}; path=/;`;
                  document.cookie = `access=; expires=${date.toUTCString()}; path=/topics;`;
                  document.cookie = `likednewslist=; expires=${date.toUTCString()}; path=/;`;
                  document.cookie = `likednewslist=; expires=${date.toUTCString()}; path=/topics;`;
                  history.push("/");
                  window.location.reload();
                  activateLoginForm();
                }}
              >
                <span style={{ color: "white" }}>로그아웃</span>
              </div>
            </div>
          )}
        </button>
        <LoginForm />
      </div>
    </nav>
  );
};
