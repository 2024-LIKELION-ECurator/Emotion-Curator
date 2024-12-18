import React from "react";
import "./Mypage.css";
import { Link } from "react-router-dom";

function Mypage() {
  return (
    <div className="mypage-container">
      {/* 프로필 섹션 */}
      <div className="profile-section">
        <div className="profile-left">
          <div className="profile-icon"></div>
          <button className="logout-button">로그아웃</button>
        </div>
        <div className="profile-right">
          <p className="nickname">닉네임</p>
          <p className="birthdate">생년월일</p>
        </div>
      </div>

      {/* 버튼 섹션 */}
      <div className="buttons-section">
        <Link to="" className="mypage-button">내가 작성한 일기</Link>
        <Link to="" className="mypage-button">나의 캘린더</Link>
      </div>
    </div>
  );
}

export default Mypage;
