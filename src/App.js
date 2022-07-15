import React, { useState } from "react";
import { settings } from "./configs/game";
import stone from "./assets/stone.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";
import "./styles.css";

export default function App() {
  let [game, setGame] = useState ({
    userSelection: "",
    cpuSelection: "",
    round: 0,
    userScore: 0,
    cpuScore: 0,
    message: "",
  });
  

  return (
    <div className="App">
      <p>Rock Paper Scissors Game</p>
    </div>
  );
}