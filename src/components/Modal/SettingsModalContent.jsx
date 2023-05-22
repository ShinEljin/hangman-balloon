
export default function SettingsModalContent() {
    return (
      <div className="settings-Container">

        <div className="inner-Container">
        <div className="checkboxes">
            <label className="content-tagtitle">Sound </label>

            <label className="content-tagtitle">Music </label>

        </div>
           
        <div className="checkboxes">
            <div className="checkbox-container" >
            <input type="checkbox" id="sound" className="settings-checkbox" />
            </div>
            <div className="checkbox-container">
            <input type="checkbox" id="music" className="settings-checkbox"/>
            </div>
        </div>
           
        </div>
     
      
      </div>
    );
  }
  
