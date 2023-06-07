import SquareButtonModal from "../Button/SquareButtonModal";
import { IconContext } from 'react-icons';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { soundStateContext } from "../../App";
import { useContext } from "react";



export default function HowToStepper(props) {
  const { currentStep, setCurrentStep } = props;
  const { handleSoundEffect, currentSoundId } = useContext(soundStateContext);



  const handlePreviousClick = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
      if (currentSoundId !== "ClickNext" ) {
        handleSoundEffect("ClickNext")
      }else if (currentSoundId !== "ClickPrev") {
        handleSoundEffect("ClickPrev")
    }
  } else if (currentStep === 1){
    handleSoundEffect("")
  }
};


  const handleNextClick = () => {
    if (currentStep < 3) {
      setCurrentStep(prevStep => prevStep + 1);
      if (currentSoundId !== "ClickNext" ) {
        handleSoundEffect("ClickNext")
      }else if (currentSoundId !== "ClickPrev") {
        handleSoundEffect("ClickPrev")
    }
    } else if (currentStep === 3){
      handleSoundEffect("")
    }
  };

  return (
    <div className="stepper-Container">
      <IconContext.Provider
        value={{
          style: {
            verticalAlign: 'middle',
            padding: '2px',
            filter: 'drop-shadow(0 0 2px #813C1C)',
          },
        }}
      >
        <div className={`stepper-leftside ${currentStep === 1 ? 'stepper-hide' : ''}`}>
        <SquareButtonModal
          content={<GrPrevious size={30} />}
          onClick={() => {
            handlePreviousClick();
          }}
          disabled={currentStep === 1}
        />
     

        </div>
    
        <div className="stepper-center">
          <p className="stepper-title">Step {currentStep}</p>
        </div>
        <div className={`stepper-rightside ${currentStep === 3 ? 'stepper-hide' : ''}`}>
        <SquareButtonModal
          content={<GrNext size={30} />}
          onClick={() => {
            handleNextClick();
          }}
          disabled={currentStep === 3}
        />
        </div>
    
      </IconContext.Provider>
    </div>
  );
}
