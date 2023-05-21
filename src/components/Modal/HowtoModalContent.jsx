export default function HowtoModalContent(props) {

    const renderContent = () => {

      switch (props.currentStep) {
        case 1:
          return (
            <div className="howto-Container">
              <div>
                <img className="step1-img" src="/howto-images/step1.png" alt="image not found" />
              </div>
              <div className="step-instruc">To Start the game, click the Start Button</div>
            </div>
          );
        case 2:
          return (
            <div className="howto-Container">
              <div>
                <img className="step2-img" src="/howto-images/step2.png" alt="image not found" />
              </div>
              <div className="step-instruc">Choose among the word category, then click Select</div>
            </div>
          );
        case 3:
          return (
            <div className="howto-Container">
              <div>
                <img className="step3-img" src="/howto-images/step3.png" alt="image not found" />
              </div>
              <div className="step-instruc">Click on the letters of  the alphabet, and if they are 
                    correct,    they get added into all the    brackets they find 
                    themselves in.   You have 5  chances   before  all the balloon pops!</div>
            </div>
          );
        default:
          return null;
      }
    }; 
  
    return <>{renderContent()}</>;
  }
  