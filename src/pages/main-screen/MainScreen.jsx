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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function MainScreen() {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");


  function openModal(content) {
    setModalOpen(true);
    setModalContent(content);

  }

  function closeModal() {
    setModalOpen(false);
    setModalContent("");

  }

  const navigateToPreGame = () => {
    navigate('/pre-game');
  };

  useEffect(() => {
    const audio = new Audio("./sounds/tempbgmusic.mp3");

    const handleAudioEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener("ended", handleAudioEnded);

    audio.play();

    return () => {
      audio.removeEventListener("ended", handleAudioEnded);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);


  
  return (
    <div className="cloud__class__1">
      <div className="app-bg">
        <div className="main-wrapper">
          <div className="uplogo">
            <img src={logo} height="350px" />
          </div>

          <div className="carl">
            <img src={Carl} height="200px" />
          </div>

          <div className="house">
            <img src={House} height="200px" />
          </div>

          <div className="kevin">
            <img src={Kevin} height="350px" />
          </div>

          <div className="russell">
            <img src={Russell} height="200px" />
          </div>

          <div className="balloon">
            <img
              src={dogBalloon}
              height="450px"
              width="300px"
              alt="img not found"
            />
          </div>

          <div id="buttonContainer">
            <Button title="Start Now" 
            onClick={() => openModal("categories")}
            />
          </div>
          <div className="lowerBtnContainer">
          <SquareButton
            content={<BsGearFill size={30} className="icon" />}
            onClick={() => openModal("settings")}
          />
          <SquareButton
            content={<AiOutlineQuestionCircle size={30} className="icon" />}
            onClick={() => openModal("how to")}
          />
          <ModalComponent
            modalOpen={modalOpen}
            closeModal={closeModal}
            modalContent={modalContent}
            navigateToPreGame={navigateToPreGame}

          />
        </div>
        </div>
      </div>
    </div>
  );
}
