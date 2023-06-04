import { useContext } from "react";
import { soundStateContext } from "../../App";

export default function SettingsModalContent(props) {

  const { isSoundEffectEnabled, setIsSoundEffectEnabled, isMusicEffectEnabled, setIsMusicEffectEnabled, handleSoundEffect, currentSoundId} = useContext(soundStateContext);

  
  const handleSoundToggle = () => {
    setIsSoundEffectEnabled((prevValue) => !prevValue);

  };

  const handleMusicToggle = () => {
    setIsMusicEffectEnabled((prevValue) => !prevValue);
  }

  

  return (
    <>
    <div className = "settings-contentContainer">
    <div className="settings-Container">
    <div className="inner-Container">
      <div className="custom-checkbox">
        <div className="new">
            <div className="form-group">
              <div >
              <input type="checkbox" id="sound"
               checked={isSoundEffectEnabled}
               onChange={handleSoundToggle} 
               onClick={() => { 
                if (currentSoundId !== "ClickNext" ) {
                  handleSoundEffect("ClickNext")
                }else if (currentSoundId !== "ClickPrev") {
                  handleSoundEffect("ClickPrev")
              }
              }}/>
              <label htmlFor="sound"></label>

              </div>

             
            </div>
            <div className="form-group">
              <div >
            <input type="checkbox" id="music"
              checked={isMusicEffectEnabled}
              onChange={handleMusicToggle}
              onClick={() => { 
                if (currentSoundId !== "ClickNext" ) {
                  handleSoundEffect("ClickNext")
                }else if (currentSoundId !== "ClickPrev") {
                  handleSoundEffect("ClickPrev")
              }
              }} />
              <label htmlFor="music"></label>
              </div>
            </div>

        </div>
      </div>

   
    </div>

  </div>
  <div className="checkboxes-label">
      <div className="content-tagtitle">Sound</div>
      <div className="content-tagtitle">Music</div>

  </div>
  </div>
  </>
  
  );
}
