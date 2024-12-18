import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo1 from '../img/logo.png';

function Navigation() {
  return (
    <div className="nav">

      <div className="nav-left">
        <Link to="/"><img src={logo1} alt="Logo" /></Link>
        <Link to="/">홈</Link>
        <Link to="/calendar">캘린더</Link>
        <Link to="/mypage">다이어리</Link>
      </div>

      
      <div className="nav-right">
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
}

export default Navigation;
