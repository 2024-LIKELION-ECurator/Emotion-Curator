import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Mypage from "./components/Mypage/Mypage";
import Recommend from './components/Recommend/Recommend'; 
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/recommend/:emotion" element={<Recommend />} /> {/* 감정에 맞는 경로로 수정 */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
