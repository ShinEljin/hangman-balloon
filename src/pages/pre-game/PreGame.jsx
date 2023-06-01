import { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";
import "../main-screen/MainScreen.css";
import "./PreGame.css";
import { soundStateContext } from "../../App";
import { useContext } from "react";

function PreGame() {
  const { handleBgMusicToggle, isMusicEnabled } = useContext(soundStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMusicEnabled) {
      handleBgMusicToggle("PreGame");
    }
    return () => {
      handleBgMusicToggle("");
    };
  }, [handleBgMusicToggle, isMusicEnabled]);

  
  const onTimerComplete = () => {
    navigate("/game");
  };
  
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
            <CountdownCircleTimer
              isPlaying
              duration={3}
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
              onComplete={onTimerComplete}
            >
              {({ remainingTime }) => (
                <div className="timer">
                  <div className="value">{remainingTime}</div>
                </div>
              )}
            </CountdownCircleTimer>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreGame;
