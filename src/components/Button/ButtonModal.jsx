import { useContext } from "react";
import { soundStateContext } from "../../App";
import "./Button.css";

const ButtonModal = ({ onClick, title }) => {
  const { handleSoundEffect, currentSoundId } = useContext(soundStateContext);

  const handleClick = () => {
    onClick();
    if (currentSoundId !== "ClickSelect" ) {
      handleSoundEffect("ClickSelect")
    }else if (currentSoundId !== "ClickSelectB") {
      handleSoundEffect("ClickSelectB")
  }
  };
  return (
    <div className="outerBtnModal">
      <div className="innerBtnModal" onClick={handleClick}>
        <div className="btnModal">
          <button
            style={{
              textDecoration: "none",
              fontFamily: "Jua",
              color: "black",
            }}
          >
            {title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonModal;
