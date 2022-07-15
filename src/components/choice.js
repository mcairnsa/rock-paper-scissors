import "./choice.css"

export const choice = ({ value, choiceIcon, onClick }) => {
    return (
        <div value = {value} onClick={onClick}>
            <img className="choice-icon" src={choiceIcon} alt="icon"/>
        </div>
    );
};