import React from "react";

function GuessInput({ guess, setGuess, gameStatus, handleGuess }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        disabled={gameStatus !== "running"}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
