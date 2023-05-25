import "./MainScreen.css";
import dogBalloon from "../../assets/Dog_Balloon.png";
import logo from "../../assets/UP_Logo.png";
import Carl from "../../assets/characters/Carl.png";
import House from "../../assets/characters/House.png";
import Kevin from "../../assets/characters/Kevin.png";
import Russell from "../../assets/characters/Russell.png";

import { BsGearFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Button from "../../components/Button/Button";
import SquareButton from "../../components/Button/SquareButton";
import ModalComponent from "../../components/Modal/ModalComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BgMusicPlayer from "../../components/AudioManager.jsx/BgMusicPlayer";
import SoundEffectPlayer from "../../components/AudioManager.jsx/SoundEffectPlayer";



export default function MainScreen() {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [currentMusicId, setCurrentMusicId] = useState("");


  function openModal(content) {
    setModalOpen(true);
    setModalContent(content);
  }

  function closeModal() {
    setIsSoundEnabled(!isSoundEnabled);
    setCurrentMusicId("Click");
    setModalOpen(false);
    setModalContent("");
  }

  const navigateToPreGame = () => {
    navigate("/pre-game");
  };

  const handleBgMusicToggle = () => {
    setIsMusicEnabled(!isMusicEnabled);
  };


  const handleSoundEffect = (musicId) => {
    setIsSoundEnabled(!isSoundEnabled);
    setCurrentMusicId(musicId);
  };
  

  return (
    <div className="cloud__class__1">
      <BgMusicPlayer
        isMusicEnabled={isMusicEnabled}
        onClick={handleBgMusicToggle}
      />
      <div className="app-bg">
        <div className="main-wrapper">
          <div className="uplogo">
            <img src={logo} height="350px" alt="Logo" />
          </div>

          <div className="carl">
            <img
              src={Carl}
              height="200px"
              alt="Carl"
              onClick={() => handleSoundEffect("Carl")}
            />
          
          </div>

          <div className="house">
            <img src={House} height="200px" alt="House" 
            />
          </div>

          <div className="kevin">
            <img src={Kevin} height="350px" alt="Kevin"
            onClick={() => handleSoundEffect("Bird")}
             />
          </div>

          <div className="russell">
            <img src={Russell} height="200px" alt="Russell" 
            onClick={() => handleSoundEffect("Russell")}
            />
          </div>

          <div className="balloon">
            <img
              src={dogBalloon}
              height="450px"
              width="300px"
              alt="Dog Balloon"
            />
          </div>

          <div id="buttonContainer">
            <Button
              title="Start Now"
              onClick={() => {
                openModal("categories");
                handleSoundEffect("Click");
              }}
            />
          </div>
          <div className="lowerBtnContainer">
            <SquareButton
              content={<BsGearFill size={30} className="icon" />}
              onClick={() => {
                openModal("settings");
                handleSoundEffect("Click");
              }}
            />
            <SquareButton
              content={<AiOutlineQuestionCircle size={30} className="icon" />}
              onClick={() => {openModal("how to");
              handleSoundEffect("Click");

            }}
            />
            <ModalComponent
              modalOpen={modalOpen}
              closeModal={closeModal}
              modalContent={modalContent}
              navigateToPreGame={navigateToPreGame}
              isMusicEnabled={isMusicEnabled}
              setIsMusicEnabled={setIsMusicEnabled}
            />
            {isSoundEnabled && (
            <SoundEffectPlayer
              isSoundEnabled={isSoundEnabled}
              musicId={currentMusicId}
            />
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
