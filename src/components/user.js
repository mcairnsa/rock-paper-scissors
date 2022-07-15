import { settings } from "../configs/game";
import "./user.css";

export const User = ({ userScore, userSelection, children }) => {
    return (
        <div className="user-card">
            <h1 className="nameStyle">{ settings.userName }</h1>
            { userScore < settings.winTarget ? (
                <>
                    <div className="choice-grid">{ children }</div>
                    <h3>
                        {
                            userSelection === ""
                            ? "Pick one!"
                            : `Your choice: ${ userSelection }`
                        }
                    </h3>
                </>
            ) : (
                <>
                    <h3 className="victoryText">Victory!</h3>
                </>
            ) }
        </div>
    );
};