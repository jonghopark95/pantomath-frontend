import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
// import useAxios from "./Screen/useAxios";
import axios from "axios";

const LoginForm = styled.div`
  width: 400px;
  height: 600px;
  background-color: whitesmoke;
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
      console.log(token);
      history.push("/");
    } catch {}
  };

  const requestRegister = async (e) => {
    e.preventDefault();
    try {
      const _token = axios.post("/users/register/", {
        email: email,
        password: password,
      });
      const token = await _token;
      console.log(token);
      //   history.push("/");
    } catch {}
  };

  //   useEffect(() => console.log(email, password), [email, password]);

  return (
    <LoginForm id="login_form" className="activate">
      {console.log(register)}
      {register === false ? (
        <form class="form-signin" method="POST" onSubmit={requestLogin}>
          <div class="text-center mb-4">
            <i
              class="fab fa-product-hunt"
              style={{
                fontSize: "60px",
                color: "#996478",
                marginBottom: "20px",
              }}
            ></i>
            <h1 class="h3 mb-3 font-weight-normal">Pantomath</h1>
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
            // onClick={setRegister(true)}
          >
            로그인
          </button>

          <button type="submit" class="btn btn-lg btn-primary btn-block">
            회원가입
          </button>
        </form>
      ) : (
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
