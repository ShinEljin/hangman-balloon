import { soundStateContext } from "../../App";
import { useContext } from "react";
const SquareButtonModal = (props) => {

  const { handleSoundEffect} = useContext(soundStateContext);

    const handleClick = () => {
    handleSoundEffect("Click");
    props.onClick();

    };

  return (
    <>


  <div className="outerSquareBtnModal" onClick={handleClick}>
      <div className="innerSquareBtnModal">
        <div className="squareBtnModal">{props.content}</div>
      </div>
    </div>
    </>
  );
};

export default SquareButtonModal;
