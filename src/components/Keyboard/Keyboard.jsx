/* eslint-disable react/prop-types */
import "./Keyboard.css";

const Keyboard = ({
  removeFromScreen = false,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}) => {
  return (
    <>
      {!removeFromScreen &&
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
          const isActive = activeLetters.includes(letter);
          const isInactive = inactiveLetters.includes(letter);
          return (
            <button
              value={letter}
              key={letter}
              className="button-alpha"
              onClick={() => addGuessedLetter(letter)}
              disabled={isInactive || isActive}
            >
              {letter}
            </button>
          );
        })}
    </>
  );
};
export default Keyboard;
