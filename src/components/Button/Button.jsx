import "./Button.css";
import { soundStateContext } from "../../App";
import { useContext } from "react";

const Button = ({ onClick, title }) => {

  const { handleSoundEffect } = useContext(soundStateContext);

  const handleClick = () => {
    handleSoundEffect("Click");
    onClick();
  };
  return (
    <div className="outerBtn" >
      <div className="innerBtn" onClick={handleClick} 
>
        <div className="btn">
          <button
            style={{
              textDecoration: "none",
              fontFamily: "Jua",
              color: "black",
            }}
            onClick={onClick}
          >
            {title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;