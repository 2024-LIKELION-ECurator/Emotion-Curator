import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo1 from '../img/logo.png';

function Navigation() {
  return (
    <div className="nav">
      {/* 좌측 메뉴 */}
      <div className="nav-left">
        <Link to="/"><img src={logo1} alt="Logo" /></Link>
        <Link to="/"><div className="navMenu">홈</div></Link>
        <Link to="/"><div className="navMenu">캘린더</div></Link>
        <Link to="/"><div className="navMenu">다이어리</div></Link>
      </div>

      {/* 우측 메뉴 */}
      <div className="nav-right">
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
}

export default Navigation;
