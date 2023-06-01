import { useContext } from "react";
import { soundStateContext } from "../../App";

export default function SettingsModalContent(props) {

  const { isSoundEffectEnabled, setIsSoundEffectEnabled, isMusicEnabled, setIsMusicEnabled } = useContext(soundStateContext);

  
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

        <div className="checkboxes">
          <div className="checkbox-container">
            <input type="checkbox" 
            id="sound" 
            className="settings-checkbox" 
            checked={isSoundEffectEnabled}
            onChange={handleSoundToggle}/>
          </div>
          <div className="checkbox-container">
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
