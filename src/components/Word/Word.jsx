/* eslint-disable react/prop-types */
const Word = ({ reveal, wordToGuess, guessedLetters }) => {
  const wordStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    fontSize: "25px",
    fontWeight: "500",
    textTransform: "uppercase",
  };

  return (
    <div style={wordStyle}>
      {wordToGuess?.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: "2px solid black" }}>
          <span
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
