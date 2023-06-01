import Button from "../Button/Button";
import "./Modal.css";


export default function WinnerModal(props) {

  return (
    <>
      {props.modalOpenWinner && (
        <div className="modal-overlay">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title" style={{margin: "0px"}}>
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
                  <div className="winnerModal-content">
                  <img src="/modal-images/kevin-winner.png" alt= "image not found" className="kevin-Modal"></img>
                  <div className="winner-textcontent">
                      <div  className="winnerModal-msg" >You completed<br></br> Level 1!</div>
                      <div className="winnerModal-submsg">All ballons has been restored</div>
                  </div>
                  <img src="/modal-images/Russell-WinnerModal.png " alt="image not found" className="russell-Modal"></img>

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
                    <Button title="Back" onClick={() => {  props.closeModalWinner();}} />
                    <Button title="Next" onClick={() => {  props.handleNextStep();}} />

                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
