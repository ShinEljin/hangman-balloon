/* eslint-disable react/prop-types */
import "./GameScreen.css";

import { useCallback, useEffect, useState } from "react";
import Confetti from "react-confetti";

import step5 from "../../assets/char-state/0_Balloon.png";
import step4 from "../../assets/char-state/1_Balloon.png";
import step3 from "../../assets/char-state/2_Balloon.png";
import step2 from "../../assets/char-state/3_Balloon.png";
import step1 from "../../assets/char-state/4_Balloon.png";
import step0 from "../../assets/char-state/5_Balloon.png";
import { randWord } from "../../lib/Words";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Arrow from "../../components/Arrow/Arrow";
import Balloon from "../../components/Balloon/Balloon";
import Keyboard from "../../components/Keyboard/Keyboard";
import Word from "../../components/Word/Word";

const GameScreen = () => {
  const images = [step0, step1, step2, step3, step4, step5];
  var width = window.innerWidth;
  var height = window.innerHeight;

  const [wordToGuess, setWordToGuess] = useState();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [question, setQuestion] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(null);

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
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const rp = randWord();
    console.log(rp);
    setWordToGuess(rp.phrase.toUpperCase());
    setQuestion(rp.ques);
  }, []);

  useEffect(() => {
    if (isLoser) {
      document.querySelector(".cloud_class_level_5").style.animationDirection =
        "reverse";
      document.querySelector(".cloud_class_level_5").style.animationDuration =
        "600ms";
    }
  }, [isLoser, isWinner]);

  return (
    <div className="cloud_class_level_5">
      <div className="bg_level_5">
        {/* CONFETTI IF WIN */}
        {isWinner ? <Confetti width={width} height={height} /> : null}
        <div className="game-timer">
          <CountdownCircleTimer
            isPlaying
            duration={60}
            colors={["#00c127", "#F7B801", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[60, 30, 20, 10, 0]}
            strokeWidth={12}
            size={100}
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
          {/* QUESTION BOX */}
          <h2 className="questionBox">
            <div style={{ textSize: "15px" }}>{question}</div>
          </h2>

          {/* SCORE */}
          <div className="score">
            <div
              style={{
                fontSize: "30px",
                textAlign: "left",
                width: "50%",
                color: "#AF8B2F",
              }}
            >
              Number of Balloons : {5 - incorrectLetters.length}
            </div>
          </div>

          <div className="maingrid">
            {/* part1 baloon */}
            <Balloon isLoser={isLoser} img={images[incorrectLetters.length]} />

            {/* part 2 phrase */}
            <div>
              <Word
                reveal={isLoser}
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
              />
            </div>

            {/* part 3 keypad */}
            <div style={{ marginTop: "20px" }}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
