import "./Button.css";

const Button = ({ onClick, title }) => {
  return (
    <div className="outerBtn" >
      <div className="innerBtn" onClick={onClick}
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