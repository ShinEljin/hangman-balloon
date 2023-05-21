import "./Button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="outerBtn">
      <div className="innerBtn">
        <div className="btn">
          <Link
            to={props.to}
            style={{
              textDecoration: "none",
              fontFamily: "Jua",
              color: "black",
            }}
          >
            {props.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Button;
