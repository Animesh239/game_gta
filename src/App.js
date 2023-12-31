import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordFromJSON} from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./components/GameOver";

export const AppContext = createContext();

function App() { 
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  // const [wordSet, setWordSet] = useState(new Set());
  const [wordArr, setWordArr] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
const [letterColorState, setLetterColorState] = useState("");
const [corrects, setCorrects] = useState([]);
const [almosts, setAlmosts] = useState([]);

  // useEffect(() => {
  //   generateWordFromJSON().then((words) => {
  //     // setWordSet(words.wordSet);
  //     setWordArr(words.wordArr);
  //     setCorrectWord(words.todaysWord);
  //   });
  // }, []);

useEffect(() => {
  generateWordFromJSON().then((result)=>{ 
    setCorrectWord(result.todaysWord) ;
    setWordArr(result.wordList) ;
   })
  // console.log(todaysWord, wordList)
}, [])


  // const correctWord = "HELLO" ;

  const onEnter = () => {
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    // console.log(currWord)
    // console.log(correctWord)

    // let currentWord = currWord.toLowerCase() + " " ; 
    // if (wordSet.has(currWord.toLowerCase())) {
    // if (wordSet.has(currentWord)) {
    //   setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    // } else {
    //   alert("Word not found");
    // }

    if(wordArr.includes(currWord)){
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    }else {
      alert(currWord + " : Word not found");
    }

    // if (currentWord === correctWord) {
    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log(currAttempt);
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelectLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
          letterColorState,
          setLetterColorState,
          corrects,
          setCorrects,
          almosts,
          setAlmosts,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;