import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter, letterColorState } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  const keyClass = disabled
    ? "error"
    : letterColorState === "correct"
    ? "correct"
    : letterColorState === "almost"
    ? "almost"
    : "";

  return (
    <div
      className={`key`}
      id={bigKey ? "big" : keyClass}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
