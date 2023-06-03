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
    <>
    <div className = "settings-contentContainer">
    <div className="settings-Container">
    <div className="inner-Container">
      <div className="custom-checkbox">
        <div className="new">
            <div className="form-group">
              <div 
                 onClick={() => { 
                  if (currentSoundId !== "ClickNext" && currentSoundId !== "ClickPrev") {
                    handleSoundEffect("ClickNext");
                  } else {
                    handleSoundEffect("ClickPrev");
                  }
                }}
              >
              <input type="checkbox" id="sound"
               checked={isSoundEffectEnabled}
               onChange={handleSoundToggle} />
              <label htmlFor="sound"></label>

              </div>

             
            </div>
            <div className="form-group">
              <div 
                onClick={() => { 
                  if (currentSoundId !== "ClickNext" && currentSoundId !== "ClickPrev") {
                    handleSoundEffect("ClickNext");
                  } else {
                    handleSoundEffect("ClickPrev");
                  }
                }}
              >
            <input type="checkbox" id="music"
              checked={isMusicEnabled}
              onChange={handleMusicToggle} />
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
