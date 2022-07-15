import React, { useState } from "react";
import { Title } from "./components/title";
import { Round } from "./components/round";
import { Playground } from "./components/playground";
import { Profile } from "./components/profile";
import { User } from "./components/user";
import { Choice } from "./components/choice";
import { Computer } from "./components/computer";
import { Score } from "./components/score";
import { Message } from "./components/message";
import { Reset } from "./components/reset";
import { settings } from "./configs/game";
import rock from "./assets/stone.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";

import "./styles.css";

export default function App() {
  let [game, setGame] = useState ({
    userSelection: "",
    pcSelection: "",
    round: 0,
    userScore: 0,
    pcScore: 0,
    message: "",
  });

  const reset = () => {
    setGame({
      ...game, 
      userSelection: "",
      pcSelection: "",
      round: 0,
      userScore: 0,
      pcScore: 0,
      message: "",
    });
  };

  const { winMessage, tieMessage, lostMessage, winTarget } = settings;
  const { pcScore, userScore } = game;

  const play = (e) => {
    if (pcScore < winTarget) {
      const userSelection = e.target.parentNode.getAttribute("value");
      const pcSelection = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
      userSelection === pcSelection
      ? setGame({ ...(game.message = tieMessage), })
      : (userSelection === "Rock" && pcSelection === "Scissors") 
      || (userSelection === "Paper" && pcSelection === "Rock") 
      || (userSelection === "Scissors" && pcSelection === "Paper")
      ? setGame({ ...(game.userScore += 1), ...(game.message = winMessage), })
      : setGame({ ...(game.pcScore += 1), ...(game.message = lostMessage), });
      setGame({ ...game, round: (game.round += 1), userSelection, pcSelection, });
    }
  };

  return (
    <div className="App">
      <Title />
      <Round {...game} />
      <Message {...game}/>
      <Playground>
        <Profile>
          <User {...game}>
            <Choice {...game} value="Rock" onClick={play} choiceIcon={rock} />
            <Choice {...game} value="Paper" onClick={play} choiceIcon={paper} />
            <Choice {...game} value="Scissors" onClick={play} choiceIcon={scissors} />
          </User>
          <Score score={userScore}/>
        </Profile>
        <Profile>
          <Computer {...game} rockIcon={rock} paperIcon={paper} scissorsIcon={scissors}/>
          <Score score={pcScore}/>
        </Profile>
      </Playground>
      <Reset {...game} onClick={reset}/>
    </div>
  );
}