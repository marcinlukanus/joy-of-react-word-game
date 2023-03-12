import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("running");

  const handleGuess = (event) => {
    event.preventDefault();
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
    setGuess("");
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        gameStatus={status}
        handleGuess={handleGuess}
      />
      {status === "won" && (
        <Banner status="happy">
          Congratulations! You solved it in{" "}
          {guesses.length > 1 ? `${guesses.length} guesses` : "1 guess"}
        </Banner>
      )}
      {status === "lost" && (
        <Banner status="sad">
          Sorry, the correct answer is{" "}
          <span style={{ fontWeight: "bold" }}>{answer}</span>
        </Banner>
      )}
    </>
  );
}

export default Game;
