import { useEffect } from "react";
import useCountdown from "../../hooks/useCountdown";
import "./PreGame.css";
import { useNavigate } from "react-router-dom";

function PreGame() {
  const { secondsLeft, start } = useCountdown();
  const navigate = useNavigate();

  useEffect(() => {
    start(5);
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      navigate("/game");
    }
  }, [secondsLeft]);

  return (
    <div id="mains">
      <div>
        <div className="main-text">
          Stage 1 <br />
          Bandages: 5
        </div>
        <div className="main-text">{secondsLeft}</div>
      </div>
    </div>
  );
}

export default PreGame;
