import dogBalloon from "../../assets/Dog_Balloon.png";
import logo from "../../assets/UP_Logo.png";
import Carl from "../../assets/characters/Carl.png";
import House from "../../assets/characters/House.png";
import Kevin from "../../assets/characters/Kevin.png";
import Russell from "../../assets/characters/Russell.png";
import RussellClickSfx from "../../assets/soundFx/BATA.mp3";
import BirdClickSfx from "../../assets/soundFx/IBON.mp3";
import CarlClickSfx from "../../assets/soundFx/TANDA.mp3";
import "./MainScreen.css";

import { useContext, useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { soundStateContext } from "../../App";
import Button from "../../components/Button/Button";
import SquareButton from "../../components/Button/SquareButton";
import ModalComponent from "../../components/Modal/ModalComponent";

const useClickSound = (soundFile, cooldown) => {
  const [playSound] = useSound(soundFile);
  const [enabled, setEnabled] = useState(true);

  const handleClick = () => {
    if (enabled) {
      playSound();
      setEnabled(false);
      setTimeout(() => setEnabled(true), cooldown);
    }
  };

  return { handleClick };
};

export default function MainScreen() {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const {
    handleSoundEffect,
    setIsStopAllSounds,
    isMusicEnabled,
    handleChangeBG,
  } = useContext(soundStateContext);

  function openModal(content) {
    setModalContent(content);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalContent("");
  }

  const navigateToPreGame = () => {
    navigate("/pre-game");
  };

  useEffect(() => {
    if (isMusicEnabled) {
      handleChangeBG("Home");
    }
    return () => {
      handleChangeBG("");
    };
  }, [isMusicEnabled]);

  const { handleClick: handleCarlClick } = useClickSound(CarlClickSfx, 700);
  const { handleClick: handleRussellClick } = useClickSound(
    RussellClickSfx,
    700
  );
  const { handleClick: handleBirdClick } = useClickSound(BirdClickSfx, 500);

  useEffect(() => {
    setIsStopAllSounds(false);
  }, []);

  return (
    <div className="cloud__class__1">
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
              className="carl-imgCharacter"
              onClick={handleCarlClick}
            />
          </div>

          <div className="house">
            <img src={House} height="200px" alt="House" />
          </div>

          <div className="kevin">
            <img
              src={Kevin}
              height="350px"
              alt="Kevin"
              className="kevin-imgCharacter"
              onClick={handleBirdClick}
            />
          </div>

          <div className="russell">
            <img
              src={Russell}
              height="200px"
              alt="Russell"
              className="russell-imgCharacter"
              onClick={handleRussellClick}
            />
          </div>

          <div className="balloon-home">
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
              }}
            />
          </div>
          <div className="lowerBtnContainer">
            <SquareButton
              content={<BsGearFill size={30} className="icon" />}
              onClick={() => {
                openModal("settings");
              }}
            />
            <SquareButton
              content={<AiOutlineQuestionCircle size={30} className="icon" />}
              onClick={() => {
                openModal("how to");
              }}
            />
            <ModalComponent
              modalOpen={modalOpen}
              closeModal={closeModal}
              modalContent={modalContent}
              navigateToPreGame={navigateToPreGame}
              handleSoundEffect={handleSoundEffect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
