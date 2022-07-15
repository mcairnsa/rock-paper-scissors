import { settings } from "../configs/game";
import "./reset.css";

export const Reset = ({ onClick, userSelection, userScore, pcScore }) => {
    return (
        userSelection !== "" && (
            <div onClick={onClick} className="reset-btn">
                <h3>
                    {
                        userScore === settings.winTarget || pcScore === settings.winTarget
                        ? "Play Again"
                        : "Reset"
                    }
                </h3>
            </div>
        )
    );
};