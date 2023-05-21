const SquareButton = (props) => {
  return (
    <div className="outerSquareBtn">
      <div className="innerSquareBtn">
        <div className="squareBtn">{props.content}</div>
      </div>
    </div>
  );
};

export default SquareButton;
