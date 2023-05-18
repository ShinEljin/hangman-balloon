/* eslint-disable react/prop-types */
import "./GameScreen.css";

import { useCallback, useEffect, useState } from "react";
import Confetti from "react-confetti";

import { randWord } from "../../lib/Words";
import step0 from "../../assets/char-state/0.png";
import step1 from "../../assets/char-state/1.png";
import step2 from "../../assets/char-state/2.png";
import step3 from "../../assets/char-state/3.png";
import step4 from "../../assets/char-state/4.png";
import step5 from "../../assets/char-state/5.png";

import Arrow from "../../components/Arrow/Arrow";
import Balloon from "../../components/Balloon/Balloon";
import Keyboard from "../../components/Keyboard/Keyboard";
import Word from "../../components/Word/Word";

// import TimeDuration from "../../TimerDuration/TimeDuration";

const GameScreen = () => {
  const images = [step0, step1, step2, step3, step4, step5];
  var width = window.innerWidth;
  var height = window.innerHeight;

  const [wordToGuess, setWordToGuess] = useState();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [question, setQuestion] = useState("");

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 5;
  const isWinner = wordToGuess
    ?.split("")
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
        <div className="Hangman">
          {/* QUESTION BOX */}
          <h2 className="questionBox">
            <div style={{ textSize: "15px" }}>{question}</div>
          </h2>

          {/* SCORE */}
          <div className="score">
            <div style={{ fontSize: "20px", textAlign: "left", width: "50%" }}>
              Bandages : {5 - incorrectLetters.length}
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
                inactiveLetters={incorrectLetters}
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
