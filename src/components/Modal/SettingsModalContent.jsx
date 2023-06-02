import { useContext } from "react";
import { soundStateContext } from "../../App";

export default function SettingsModalContent(props) {

  const { isSoundEffectEnabled, setIsSoundEffectEnabled, isMusicEnabled, setIsMusicEnabled, handleSoundEffect, currentSoundId} = useContext(soundStateContext);

  
  const handleSoundToggle = () => {
    setIsSoundEffectEnabled((prevValue) => !prevValue);

  };

  const handleMusicToggle = () => {
    setIsMusicEnabled((prevValue) => !prevValue);
  }

  

  return (
    <div className="settings-Container">
      <div className="inner-Container">
        <div className="checkboxes">
          <label className="content-tagtitle">Sound</label>
          <label className="content-tagtitle">Music</label>
        </div>

        <div className="checkboxes" >
          <div className="checkbox-container" 
          onClick={()=> { if (currentSoundId !== "ClickNext" ) {
                handleSoundEffect("ClickNext")
              }else if (currentSoundId !== "ClickPrev") {
                handleSoundEffect("ClickPrev")
            }}}>
            <input type="checkbox" 
            id="sound" 
            className="settings-checkbox" 
            checked={isSoundEffectEnabled}
            onChange={handleSoundToggle}
            />
          </div>
          <div className="checkbox-container" 
           onClick={()=> { if (currentSoundId !== "ClickNext" ) {
            handleSoundEffect("ClickNext")
          }else if (currentSoundId !== "ClickPrev") {
            handleSoundEffect("ClickPrev")
          }}}>
            <input
              type="checkbox"
              id="music"
              className="settings-checkbox"
               checked={isMusicEnabled}
                onChange={handleMusicToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
