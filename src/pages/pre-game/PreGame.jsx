import { useEffect } from "react";
import "./PreGame.css";
import "../main-screen/MainScreen.css";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function PreGame() {
  // PAG CLINIC YUNG YES SA ARE YOU SURE TSAKA LANG TO GAGAWIN

  return (
    <>
      <div className="dim_gray" />
      <div className="cloud__class__1">
        <div className="app-bg-pre-game">
          <div className="main-text">
            Stage 1 out of 5 <br />
            <span className="balloon-text">Balloons: 5</span>
          </div>
          <div className="main-text">
            {/* {secondsLeft} */}
            <CountdownCircleTimer
              isPlaying
              duration={5}
              colors={[
                "#CFAA4B",
                "#CFAA4B",
                "#CFAA4B",
                "#CFAA4B",
                "#CFAA4B",
                "#CFAA4B",
              ]}
              strokeWidth={20}
              trailStrokeWidth={30}
              trailColor="#4F3222"
              strokeLinecap="square"
              rotation="counterclockwise"
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
        </div>
      </div>
    </>
  );
}

const renderTime = ({ remainingTime }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (remainingTime === 0) {
      navigate("/game");
    }
  }, [remainingTime]);

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

export default PreGame;
