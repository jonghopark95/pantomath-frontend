import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
// import useAxios from "./Screen/useAxios";
import axios from "axios";

const LoginForm = styled.div`
  width: 400px;
  height: 630px;
  background-color: #dcdde1;
  z-index: 100;
  position: absolute;
  top: 80px;
  right: 80px;
  display: none;
  padding: 80px 50px;
  box-sizing: border-box;

  &.activate {
    display: block;
  }
`;

//     const {
//     loading: keywordDataLoading,
//     data: keywordData,
//     refetch: keywordRefetch,
//   } = useAxios({
//     url: "http://127.0.0.1:8000/users/login",
//     params: {
//       category: currentCategory,
//     },
//   });

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  axios.defaults.baseURL = "http://127.0.0.1:8000";
  axios.defaults.withCredentials = true;

  let history = useHistory();

  const requestLogin = async (e) => {
    e.preventDefault();
    try {
      const _token = axios.post("/users/login/", {
        email: email,
        password: password,
      });
      const token = await _token;
      if (token.status === 200) {
        document.getElementById("login_form").classList.toggle("activate");
        window.location.reload();
      }
      console.log(token.data["token"]);
      document.cookie = "access=" + token.data["token"];
      history.push("/");
    } catch {
      console.log("error happened");
      history.push("/");
    }
  };

  const requestRegister = async (e) => {
    e.preventDefault();
    try {
      const _token = axios.post("/users/register/", {
        email: email,
        password: password,
      });
      const token = await _token;
      console.log(token, token.status);

      if (token.status === 200) alert("회원가입에 성공하였습니다.");
      setRegister(false);
      history.push("/");
    } catch {
      console.log("error happened");
      document.getElementById("login_form").classList.toggle("activate");
      alert("로그인 실패!");
    }
  };

  //   useEffect(() => console.log(email, password), [email, password]);

  return (
    <LoginForm id="login_form">
      {register === false && (
        <form class="form-signin" method="POST" onSubmit={requestLogin}>
          <div class="text-center mb-4">
            <button
              onClick={() =>
                document
                  .getElementById("login_form")
                  .classList.remove("activate")
              }
              style={{ all: "unset" }}
            >
              <i
                class="fas fa-times"
                style={{
                  top: "7px",
                  right: "15px",
                  position: "absolute",
                  fontSize: "34px",
                  color: "#7f8fa6",
                  cursor: "pointer",
                }}
              ></i>
            </button>
            <i
              class="fab fa-product-hunt"
              style={{
                fontSize: "60px",
                color: "#7f8fa6",
                marginBottom: "20px",
              }}
            ></i>
            <h1
              class="h3 mb-3 font-weight-normal"
              style={{ fontFamily: "Cedarville Cursive", fontSize: "30px" }}
            >
              pantomath
            </h1>
          </div>
          <div class="form-label-group">
            <input
              type="email"
              name="email"
              value={email}
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
              style={{ marginTop: "60px", marginBottom: "30px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-label-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
              style={{ marginBottom: "70px" }}
            />
          </div>
          <button
            type="submit"
            class="btn btn-lg btn-primary btn-block"
            style={{
              marginBottom: "30px",
              backgroundColor: "#7f8fa6",
              borderColor: "#7f8fa6",
              fontSize: "15px",
            }}
          >
            로그인
          </button>

          <button
            type="submit"
            class="btn btn-lg btn-primary btn-block"
            onClick={() => {
              setRegister(true);
            }}
            style={{
              backgroundColor: "#7f8fa6",
              borderColor: "#7f8fa6",
              fontSize: "15px",
            }}
          >
            회원가입
          </button>
        </form>
      )}

      {register === true && (
        <form class="form-signin" method="POST" onSubmit={requestRegister}>
          <div class="text-center mb-4">
            <i
              class="fab fa-product-hunt"
              style={{
                fontSize: "60px",
                color: "#996478",
                marginBottom: "20px",
              }}
            ></i>
            <h1 class="h3 mb-3 font-weight-normal">회원가입</h1>
          </div>
          <div class="form-label-group">
            <input
              type="email"
              name="email"
              value={email}
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
              style={{ marginTop: "50px", marginBottom: "30px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-label-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
              style={{ marginBottom: "70px" }}
            />
          </div>
          <button
            type="submit"
            class="btn btn-lg btn-primary btn-block"
            style={{
              marginBottom: "20px",
            }}
          >
            확인
          </button>
        </form>
      )}
    </LoginForm>
  );
};
