import { useEffect } from "react";
import "./PreGame.css";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function PreGame() {
  // PAG CLINIC YUNG YES SA ARE YOU SURE TSAKA LANG TO GAGAWIN

  return (
    <div id="mains">
      <div>
        <div className="main-text">
          Stage 1 <br />
          Balloons: 5
        </div>
        <div className="main-text">
          {/* {secondsLeft} */}
          <CountdownCircleTimer
            isPlaying
            duration={5}
            colors={[
              "#00c127",
              "#00c127",
              "#F7B801",
              "#F7B801",
              "#A30000",
              "#A30000",
            ]}
            colorsTime={[5, 4, 3, 2, 1, 0]}
            strokeWidth={20}
            strokeLinecap="square"
            rotation="counterclockwise"
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      </div>
    </div>
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
