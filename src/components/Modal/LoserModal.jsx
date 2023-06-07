import ButtonModal from "../Button/ButtonModal";
import "./Modal.css";


export default function LoserModal(props) {

  return (
    <>
      {props.modalOpenLoser && (
        <div className="modal-overlay">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title" style={{margin: "0px"}}>
                  You Lose
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
                <div className="modal-center-loser">
                  <div className="loserModal-content">
                  <div className="loser-textcontent">
                      <div  className="loserModal-msg" >Oops! You run out of balloons</div>
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
                  <ButtonModal title="Home" onClick={() => {  props.closeModalLoser(); }} />
                    <ButtonModal title="Retry" onClick={() => {  props.handleNextStep();  }} />

                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
