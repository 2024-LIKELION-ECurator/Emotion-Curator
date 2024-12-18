import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import happy from '../../img/stc_happy.png';
import sad from '../../img/stc_sad.png';
import surprised from '../../img/stc_surprised.png';
import loving from '../../img/stc_loving.png';
import sleepy from '../../img/stc_sleepy.png';
import nervous from '../../img/stc_nervous.png';
import pensive from '../../img/stc_pensive.png';
import relieved from '../../img/stc_relieved.png';
import joyful from '../../img/stc_joyful.png';
import ModalAcess from "../Modal/ModalAcess"; 
import "./Recommend.css";

function Recommend() {
  const { emotion } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const emotionImages = {
    HAPPY: happy,
    SAD: sad,
    SURPRISED: surprised,
    LOVING: loving,
    SLEEPY: sleepy,
    NERVOUS: nervous,
    PENSIVE: pensive,
    RELIEVED: relieved,
    JOYFUL: joyful,
  };

  const emotionIcon = emotionImages[emotion] || happy;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <div className="recommend-container">
      <div className="emotion-section">
        <img src={emotionIcon} alt={`${emotion} Emotion`} className="emotion-icon" />
        <p className="emotion-text">{emotion}</p>
      </div>
      <div className="content-section">
        <div className="category">
          <p className="category-title"><a className="musicpink">MUSIC</a> FOR YOU</p>
          <ol>
            <li>노래 제목 - 가수 이름</li>
            <li>노래 제목 - 가수 이름</li>
            <li>노래 제목 - 가수 이름</li>
            <li>노래 제목 - 가수 이름</li>
          </ol>
        </div>
        <div className="category">
          <p className="category-title"><a className="moviegreen">MOVIES</a> FOR YOU</p>
          <ol>
            <li>영화 제목 - 감독 이름</li>
            <li>영화 제목 - 감독 이름</li>
            <li>영화 제목 - 감독 이름</li>
            <li>영화 제목 - 감독 이름</li>
          </ol>
        </div>
        <div className="category">
          <p className="category-title"><a className="bookblue">BOOKS</a> FOR YOU</p>
          <ol>
            <li>책 제목 - 작가 이름</li>
            <li>책 제목 - 작가 이름</li>
            <li>책 제목 - 작가 이름</li>
            <li>책 제목 - 작가 이름</li>
          </ol>
        </div>
      </div>
      <div className="button-section">
        <button className="back-button" onClick={handleGoBack}>뒤로 가기</button>
        <button className="calendar-button" onClick={handleOpenModal}>캘린더 가기</button>
      </div>

      {isModalOpen && <ModalAcess onClose={handleCloseModal} />} {/* 모달이 열렸을 때 표시 */}
    </div>
  );
}

export default Recommend;
