import React from "react";
import happy from '../img/stc_happy.png';
import joyful from '../img/stc_joyful.png';
import loving from '../img/stc_loving.png';
import nervous from '../img/stc_nervous.png';
import pensive from '../img/stc_pensive.png';
import relieved from '../img/stc_relieved.png';
import sad from '../img/stc_sad.png';
import surprised from '../img/stc_surprised.png';
import sleepy from '../img/stc_sleepy.png';
import "./Home.css";

class Home extends React.Component {

  
  render() {
    return (
      <section className="container">
        <h3>지금 당신의 기분은 어떤가요?</h3>
        <div className="stc">
          <div className="emotion">
            <img src={happy} alt="Happy" />
            <p className="emo-title">HAPPY</p>
          </div>
          <div className="emotion">
            <img src={sad} alt="Sad" />
            <p className="emo-title">SAD</p>
          </div>
          <div className="emotion">
            <img src={surprised} alt="Surprised" />
            <p className="emo-title">SURPRISED</p>
          </div>
          <div className="emotion">
            <img src={loving} alt="Loving" />
            <p className="emo-title">LOVING</p>
          </div>
          <div className="emotion">
            <img src={sleepy} alt="Sleepy" />
            <p className="emo-title">SLEEPY</p>
          </div>
          <div className="emotion">
            <img src={nervous} alt="Nervous" />
            <p className="emo-title">NERVOUS</p>
          </div>
          <div className="emotion">
            <img src={pensive} alt="Pensive" />
            <p className="emo-title">PENSIVE</p>
          </div>
          <div className="emotion">
            <img src={relieved} alt="Relieved" />
            <p className="emo-title">RELIEVED</p>
          </div>
          <div className="emotion">
            <img src={joyful} alt="Joyful" />
            <p className="emo-title">JOYFUL</p>
          </div>
        </div>
        <input id="signup_btn" type="submit" className="select_btn" value="선택" />
      </section>
    );
  }
}

export default Home;
