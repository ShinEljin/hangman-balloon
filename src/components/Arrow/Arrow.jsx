/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Arrow.css";
import { Navigate } from "react-router-dom";

function Arrow(props) {
  const [redirect, setRedirect] = useState(null);

  function handleClick() {
    setTimeout(() => {
      setRedirect(<Navigate to={props.redirect} />);
    }, 1000);
  }

  return (
    <div>
      {redirect}

      <button className="learn-more" onClick={() => handleClick()}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{props.stage}</span>
      </button>
    </div>
  );
}
export default Arrow;
