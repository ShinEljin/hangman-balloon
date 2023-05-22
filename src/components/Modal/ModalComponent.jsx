import "./Modal.css";
import CloseButton from "../Button/CloseButton";
import SettingsModalContent from "./SettingsModalContent";
import HowtoModalContent from "./HowtoModalContent";
import CategoriesModalContent from "./CategoriesModalContent";
import HowToStepper from "./HowtoSteppers";
import Button from "../Button/Button";
import { useState } from 'react';

export default function ModalComponent(props) {
  const [currentStep, setCurrentStep] = useState(1);

  
  return (
    <>
      {props.modalOpen && (
        <div className="modal-overlay">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title">
                  {props.modalContent === "settings" && "Settings"}
                  {props.modalContent === "how to" && "How to Play"}
                  {props.modalContent === "categories" && "Pick a Category"}
                </div>
                <CloseButton onClick={props.closeModal} />
              </div>
              <div className="modal-body">
                <div className="modal-left">
                  <img className={`leaf-left ${props.modalContent === "categories" ? 'leaf-left-categories' : ''}`}src="/leaf-images/left-leaf.png" alt="image not found" />
                </div>
                <div className="modal-center">
                  {props.modalContent === "settings" && <SettingsModalContent />}
                  {props.modalContent === "how to" && <HowtoModalContent currentStep={currentStep} />}
                  {props.modalContent === "categories" && <CategoriesModalContent />}
                </div>
                <div className="modal-right">
                  <img  className={`leaf-right ${props.modalContent === "categories" ? 'leaf-right-categories' : ''}`} src="/leaf-images/right-leaf.png" alt="image not found" />
                 
                </div>
              </div>
              <div className="modal-footer">
                {props.modalContent === "how to" && (
                  <HowToStepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
                )}
                 {props.modalContent === "categories" && (
                  <div className="select-container">
              
                  <Button title="Select"
                    onClick={props.navigateToPreGame}

                  
                  
                  />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
