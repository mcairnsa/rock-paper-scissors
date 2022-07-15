import "./round.css";

export const Round = ({ userSelection, round }) => {
    return (
        <h1 className="round">
            {userSelection === "" ? "No rounds yet!" : `Round: ${round}`}
        </h1>
    );
};