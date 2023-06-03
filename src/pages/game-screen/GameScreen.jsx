/* eslint-disable react/prop-types */
import "./GameScreen.css";

import { useCallback, useContext, useEffect, useState } from "react";
import Confetti from "react-confetti";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";
import { categoryContext, soundStateContext } from "../../App";
import step5 from "../../assets/char-state/0_Balloon.png";
import step4 from "../../assets/char-state/1_Balloon.png";
import step3 from "../../assets/char-state/2_Balloon.png";
import step2 from "../../assets/char-state/3_Balloon.png";
import step1 from "../../assets/char-state/4_Balloon.png";
import step0 from "../../assets/char-state/5_Balloon.png";
import Arrow from "../../components/Arrow/Arrow";
import Balloon from "../../components/Balloon/Balloon";
import Keyboard from "../../components/Keyboard/Keyboard";
import LoserModal from "../../components/Modal/LoserModal";
import WinnerModal from "../../components/Modal/WinnerModal";
import Word from "../../components/Word/Word";
import { randWord } from "../../lib/Words";

const GameScreen = () => {
  const navigate = useNavigate();

  const {
    handleBgMusicToggle,
    handleSoundEffect,
    currentSoundId,
    isMusicEnabled,
    setIsStopAllSounds,
    handleChangeBG,
  } = useContext(soundStateContext);
  const [level, setLevel] = useState(1);

  const images = [step0, step1, step2, step3, step4, step5];
  var width = window.innerWidth;
  var height = window.innerHeight;

  const [wordToGuess, setWordToGuess] = useState();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [question, setQuestion] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(null);
  const { selectedOption } = useContext(categoryContext);
  const [modalOpenWinner, setModalOpenWinner] = useState(false);
  const [modalOpenLoser, setModalOpenLoser] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(0);
  const [numberOfBalloons] = useState(5);

  const handleNextStep = () => {
    handleChangeBG("InGame");
    setLevel((prev) => prev + 1);
    setGuessedLetters([]);
    setModalOpenWinner(false);
    setIsPlaying(true);
    setKey((prevKey) => prevKey + 1);
  };
  function openModalWinner() {
    setModalOpenWinner(true);
  }
  function closeModalWinner() {
    setIsStopAllSounds(true);
    setModalOpenWinner(false);
    navigate("/");
  }

  function openModalLoser() {
    setModalOpenLoser(true);
  }

  function closeModalLoser() {
    setModalOpenLoser(false);
    setIsStopAllSounds(true);
    navigate("/");
  }

  function retryButtonFunction() {
    console.log("test");
    handleChangeBG("InGame");
  }
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 5 || timeRemaining === 0;
  const isWinner = wordToGuess
    ?.split("")
    .filter((letter) => letter !== " ")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);

      if (wordToGuess.includes(letter)) {
        if (currentSoundId !== "CorrectA") {
          handleSoundEffect("CorrectA");
        } else if (currentSoundId === "CorrectA") {
          handleSoundEffect("CorrectB");
        } else if (currentSoundId === "CorrectB") {
          handleSoundEffect("CorrectA");
        }
      } else {
        if (currentSoundId !== "WrongA") {
          handleSoundEffect("WrongA");
        } else if (currentSoundId === "WrongA") {
          handleSoundEffect("WrongB");
        } else if (currentSoundId === "WrongB") {
          handleSoundEffect("WrongA");
        }
      }
    },
    [guessedLetters, isWinner, isLoser, currentSoundId]
  );

  useEffect(() => {
    const rp = randWord(selectedOption);
    setWordToGuess(rp.word.toUpperCase());
    setQuestion(rp.Hint);
  }, [level]);

  useEffect(() => {
    if (isLoser) {
      setIsPlaying(false);
      handleChangeBG("Remove");
      handleSoundEffect("Loser");
      document.querySelector(".cloud_class_level_5").style.animationDirection =
        "reverse";
      document.querySelector(".cloud_class_level_5").style.animationDuration =
        "600ms";
      setTimeout(() => {
        openModalLoser();
      }, 4000); // adjust time for loser modal
    }
    if (isWinner) {
      setIsPlaying(false);
      handleChangeBG("Remove");
      handleSoundEffect("Winner");
      setTimeout(() => {
        openModalWinner();
      }, 4000); // adjust time for winner modal
    }
  }, [isLoser, isWinner]);

  useEffect(() => {
    if (timeRemaining === 10) {
      handleSoundEffect("Countdown");
    }
  }, [timeRemaining]);

  useEffect(() => {
    if (isMusicEnabled) {
      handleBgMusicToggle("InGame");
    }
    return () => {
      handleBgMusicToggle("");
    };
  }, [isMusicEnabled]);

  return (
    <div className="cloud_class_level_5">
      <div className="bg_level_5">
        {/* CONFETTI IF WIN */}
        {isWinner ? <Confetti width={width} height={height} /> : null}
        <div className="game-timer">
          <CountdownCircleTimer
            isPlaying={isPlaying}
            key={key}
            duration={9999}
            colors={["#00c127", "#F7B801", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[60, 30, 20, 10, 0]}
            strokeWidth={12}
            size={100}
            onComplete={() => {
              setIsPlaying(false);
            }}
            strokeLinecap="square"
            rotation="counterclockwise"
          >
            {({ remainingTime }) => {
              setTimeRemaining(remainingTime);
              return (
                <div className="timer">
                  <div className="value">{remainingTime}</div>
                </div>
              );
            }}
          </CountdownCircleTimer>
        </div>

        <div className="Hangman">
          <div className="score">
            <div
              style={{
                fontSize: "30px",
                textAlign: "left",
                width: "50%",
                color: "#AF8B2F",
              }}
            >
              Number of Balloons : {numberOfBalloons - incorrectLetters.length}
            </div>
          </div>

          <div className="maingrid">
            {/* part1 baloon */}
            <Balloon isLoser={isLoser} img={images[incorrectLetters.length]} />
            <div className="questionBox">
              <div>
                <h2>Hint: {question}</h2>
                <h3>(Category - {selectedOption})</h3>
              </div>
            </div>
            <div>
              <Word
                reveal={isLoser}
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
              />
            </div>

            {/* part 3 keypad */}
            <div className="Keyboard-Container">
              <Keyboard
                removeFromScreen={isWinner || isLoser}
                activeLetters={guessedLetters.filter((letter) =>
                  wordToGuess.includes(letter)
                )}
                inactiveLetters={guessedLetters}
                addGuessedLetter={addGuessedLetter}
              />
              {/* {gameStat === 1 ? (
                <Arrow stage={"Stage2"} redirect={"stage2"} />
              ) : gameStat === 0 ? (
                <h1>You Lost</h1>
              ) : (
                <div className="words">{gameStat}</div>
              )} */}
              {/* 


              {gameStat === 0 ? <> {reset} </> : null} */}
            </div>

            <WinnerModal
              modalOpenWinner={modalOpenWinner}
              handleNextStep={() => handleNextStep()}
              closeModalWinner={closeModalWinner}
              level={level}
            />
            <LoserModal
              modalOpenLoser={modalOpenLoser}
              handleNextStep={() => retryButtonFunction()}
              closeModalLoser={closeModalLoser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
