/* eslint-disable react/prop-types */
import "./Balloon.css";

function Balloon({ isLoser, img }) {
  if (isLoser) {
    var element = document.getElementById("balloon");
    element.classList.remove("balloon");
    element.classList.add("balloonafter");
  }
  return (
    <div className="balloon mt-2 mb-2" id="balloon">
      <img src={img} alt="Not Found" height="310" width="192" />
    </div>
  );
}

export default Balloon;
