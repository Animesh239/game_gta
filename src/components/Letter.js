import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt, correctWord, setLetterColorState ,corrects,
    setCorrects,
    almosts,
    setAlmosts,  } =
    useContext(AppContext);
    // const [letterColorState, setLetterColorState] = useState("");

  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      // console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
      setLetterColorState(letterState)
    }else if(correct){
      setCorrects((prev) => [...prev, letter]);
      // console.log(corrects)
    }else if(almost){
      setAlmosts((prev) => [...prev, letter]);
      // console.log(almosts)
    }else{
      // return console.log("big errr") ;
    }
  }, [currAttempt.attempt]);
  return (
    <div className="letter" id={letterState.toString()}>
      {letter}
    </div>
  );
}

export default Letter;
