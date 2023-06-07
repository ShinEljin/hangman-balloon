import { useState } from "react";
import ButtonModal from "../Button/ButtonModal";
import CloseButton from "../Button/CloseButton";
import CategoriesModalContent from "./CategoriesModalContent";
import HowtoModalContent from "./HowtoModalContent";
import HowToStepper from "./HowtoSteppers";
import "./Modal.css";
import SettingsModalContent from "./SettingsModalContent";


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
                <CloseButton onClick={() => { props.closeModal();  }} />
              </div>
              <div className="modal-body">
                <div className="modal-left">
                  <img
                    className={`leaf-left ${
                      props.modalContent === "categories"
                        ? "leaf-left-categories"
                        : ""
                    }`}
                    src="/leaf-images/left-leaf.png"
                    alt="image not found"
                  />
                </div>
                <div className="modal-center">
                  {props.modalContent === "settings" && (
                    <SettingsModalContent
                      isMusicEnabled={props.isMusicEnabled}
                      setIsMusicEnabled={props.setIsMusicEnabled}
                    />
                  )}
                  {props.modalContent === "how to" && (
                    <HowtoModalContent currentStep={currentStep} 
                    handleSoundEffect={props.handleSoundEffect}

                    />
                  )}
                  {props.modalContent === "categories" && (
                    <CategoriesModalContent 
                    handleSoundEffect={props.handleSoundEffect}
                    />
                  )}
                </div>
                <div className="modal-right">
                  <img
                    className={`leaf-right ${
                      props.modalContent === "categories"
                        ? "leaf-right-categories"
                        : ""
                    }`}
                    src="/leaf-images/right-leaf.png"
                    alt="image not found"
                  />
                </div>
              </div>
              <div className="modal-footer">
                {props.modalContent === "how to" && (
                  <HowToStepper
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    
                  />
                )}
                {props.modalContent === "categories" && (
                  <div className="select-container">
                    <ButtonModal title="Select" onClick={() => { props.handleSoundEffect("ClickX");  props.navigateToPreGame();}} />
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
