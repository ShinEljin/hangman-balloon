import { soundStateContext } from "../../App";
import { useContext } from "react";
const SquareButton = (props) => {

  const { handleSoundEffect} = useContext(soundStateContext);

    const handleClick = () => {
    handleSoundEffect("Click");
    props.onClick();

    };

  return (
    <>


  <div className="outerSquareBtn" onClick={handleClick}>
      <div className="innerSquareBtn">
        <div className="squareBtn">{props.content}</div>
      </div>
    </div>
    </>
  );
};

export default SquareButton;
