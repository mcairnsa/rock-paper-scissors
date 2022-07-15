import { settings } from "../configs/game";
import "./title.css";

export const Title = () => {
    return <h1 className="title">{ settings.gameName }</h1>
};