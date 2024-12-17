import React, { useState } from "react";
import "./Login.css";
import logo1 from '../../img/logo.png';
import { Link, useNavigate } from "react-router-dom"; // useNavigate 추가
import axios from 'axios'; // axios import

function Login() {
  const [formData, setFormData] = useState({
    username: "", // id -> username으로 변경
    password: "",
  });

  const [loading, setLoading] = useState(false); // 로딩 상태
  const navigate = useNavigate();

  // 입력값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 로그인 요청 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://13.125.7.131/users/login/', {
        username: formData.username, // id -> username
        password: formData.password,
      });
      console.log("로그인 성공:", response.data);
      
      // access_token을 로컬 스토리지에 저장
      localStorage.setItem("access_token", response.data.access);

      // 마이페이지로 리디렉션
      navigate('/mypage');
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
    } finally {
      setLoading(false);
    }
  };

  // 버튼 색상 조건: 둘 다 입력되었으면 #FECCC9, 아니면 회색
  const isButtonActive = formData.username && formData.password;

  return (
    <div className="container">
      <a href="/home">
        <img src={logo1} alt="Logo" className="logoimg" />
      </a>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            id="id_input"
            name="username" // id -> username으로 수정
            type="text"
            maxLength="20"
            placeholder="아이디"
            className="id_input"
            value={formData.username} // id -> username으로 수정
            onChange={handleChange}
          />
          <input
            id="pw_input"
            name="password"
            type="password"
            maxLength="20"
            placeholder="비밀번호"
            className="pw_input"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <input
          id="login_btn"
          type="submit"
          className="login_btn"
          value={loading ? "로딩 중..." : "로그인"}
          style={{
            backgroundColor: isButtonActive ? "#FECCC9" : "#D3D3D3", // 조건에 따라 버튼 색상 변경
          }}
          disabled={loading || !isButtonActive} // 버튼 비활성화 상태
        />
        <div className="options">
          <label className="keep">
            <input type="checkbox" />
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
