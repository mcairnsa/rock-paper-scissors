import { settings } from "../configs/game";
import "./computer.css"

export const Computer = ({
    pcScore,
    userSelection,
    pcSelection,
    rockIcon,
    paperIcon,
    scissorsIcon,
}) => {
    return (
        <div className="computer-card">
            <h1 className="nameStyle">Computer</h1>
            { pcScore < settings.winTarget ? (
                userSelection === "" ? (
                    <h3 className="waiting-message">{ settings.waitingMessage }</h3>
                ) : (
                    <>
                        <img src={
                            pcSelection === "Rock"
                                ? rockIcon
                                : pcSelection === "Paper"
                                ? paperIcon: scissorsIcon
                        }
                        alt = "icon"
                        className="cpuIcon"
                        />
                        <h3>PC selected: { pcSelection }</h3>
                    </>
                ) 
            ) : (
                <>
                <h3 className="victoryText">Victory!</h3>
                </>
            )}
        </div>
    );
};