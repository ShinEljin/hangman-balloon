import "./Keyboard.css";

const KeyboardContainer = ({
  word,
  inactiveLetters,
  addGuessedLetter,
  activeLetters,
}) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  return (
    <>
      {rows.map((row, index) => (
        <div key={index}>
          {row.map((letter) => (
            <button
              key={letter}
              className={
                activeLetters.includes(letter)
                  ? "CorrectLetters"
                  : "button-alpha"
              }
              onClick={() => addGuessedLetter(letter, word)}
              disabled={inactiveLetters.includes(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </>
  );
};

export default KeyboardContainer;
