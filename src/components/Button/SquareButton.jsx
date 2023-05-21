const SquareButton = (props) => {
  return (
    <>
  

  <div className="outerSquareBtn" onClick={props.onClick}>
      <div className="innerSquareBtn">
        <div className="squareBtn">{props.content}</div>
      </div>
    </div>
    </>
  );
};

export default SquareButton;
