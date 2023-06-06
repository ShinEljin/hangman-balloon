import Button from "../Button/Button";
import "./Modal.css";

export default function CompletedModal(props) {
  return (
    <>
      {props.modalOpenCompleted && (
        <div className="modal-overlay">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title" style={{ margin: "0px" }}>
                  Congratulations
                </div>
              </div>
              <div className="modal-body">
                <div className="modal-left">
                  <img
                    className="leaf-left"
                    src="/leaf-images/left-leaf.png"
                    alt="image not found"
                  />
                </div>
                <div className="modal-center">
                  <div className="completedModal-content">
                    <div className="completedModal-container">
                      <div className="completed-textcontent">
                        <div className="completedModal-msg">You Won!</div>
                        <div className="completedModal-submsg">
                          You Completed Level {props.level}
                        </div>
                      </div>
                      <img
                        src="/modal-images/CompletedBG.png "
                        alt="image not found"
                        className="completedBgImage"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="modal-right">
                  <img
                    className="leaf-right-winner"
                    src="/leaf-images/right-leaf.png"
                    alt="image not found"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <div className="select-container">
                  <Button title="Home" onClick={props.closeModalCompleted} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
