import React, { useState } from "react";
import "./Signup.css";
import logo1 from '../img/logo.png';

function Signup() {
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
          <input
            id="nickname_input"
            name="nickname"
            type="text"
            maxLength="20"
            placeholder="닉네임"
            className="nickname_input"
          />
          <input
            id="birth_input"
            name="birth"
            type="text"
            maxLength="20"
            placeholder="생년월일"
            className="birth_input"
          />
        </div>
        <input id="signup_btn" type="submit" className="signup_btn" value="회원가입" />
        
      </form>
      
    </div>
  );
}

export default Signup;
