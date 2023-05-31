/* eslint-disable react/prop-types */
import "./Word.css";
const Word = ({ reveal, wordToGuess, guessedLetters }) => {
  const wordStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1%",
    gap: "8px",
    fontSize: "25px",
    fontWeight: "500",
    textTransform: "uppercase",
  };

  return (
    <div style={wordStyle}>
      {wordToGuess?.split("").map((letter, index) => (
        <span key={index} className={letter === " " ? "space" : "WordByWord"}>
          <span
            className={letter === " " ? "space" : ""}
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
export default Word;
