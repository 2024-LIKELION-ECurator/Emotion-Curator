import React, { useState } from "react";
import "./Login.css";
import logo1 from '../img/logo.png';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <a href="/home">
        <img src={logo1} alt="Logo" className="logoimg"/>
      </a>
      <form>
        <div className="input">
          <input
            id="id_input"
            name="id"
            type="text"
            maxLength="20"
            placeholder="아이디"
            className="id_input"
          />
          <input
            id="pw_input"
            name="password"
            type="password"
            maxLength="20"
            placeholder="비밀번호"
            className="pw_input"
          />
        </div>
        <input id="login_btn" type="submit" className="login_btn" value="로그인" />
        <div className="options">
          <label className="keep">
            <input type="checkbox" />
            <input type="hidden" name="keep" value="false" />
            로그인 유지
          </label>
        </div>
      </form>
      <p className="register">
        <Link to="/signup">회원가입</Link>
      </p>
      
    </div>
  );
}

export default Login;
