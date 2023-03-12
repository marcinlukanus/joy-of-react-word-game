import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={`cell ${guessResult ? guessResult[num].status : ""}`}
          key={num}
        >
          {guess ? guess[num] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
